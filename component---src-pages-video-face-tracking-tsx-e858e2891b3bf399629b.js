webpackJsonp([147681570848045],{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Mui = __webpack_require__(28);
	var face_api_js_react_1 = __webpack_require__(27);
	var React = __webpack_require__(2);
	var ModalLoader_1 = __webpack_require__(98);
	var const_1 = __webpack_require__(43);
	var SelectFaceDetector_1 = __webpack_require__(120);
	var CenterContent_1 = __webpack_require__(61);
	
	var FaceAndLandmarkDetection = function (_React$Component) {
	    _inherits(FaceAndLandmarkDetection, _React$Component);
	
	    function FaceAndLandmarkDetection() {
	        _classCallCheck(this, FaceAndLandmarkDetection);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            withLandmarks: false,
	            withBoxes: true
	        };
	        return _this;
	    }
	
	    FaceAndLandmarkDetection.prototype.render = function render() {
	        var _this2 = this;
	
	        return React.createElement(SelectFaceDetector_1.SelectFaceDetector, { initialFaceDetector: this.props.initialFaceDetector, initialTinyFaceDetectorOptions: this.props.initialTinyFaceDetectorOptions }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
	            return React.createElement(face_api_js_react_1.LoadModels, _extends({}, const_1.getFaceDetectionModelUri(detectorName, const_1.MODELS_URI), { faceLandmarkModelUrl: const_1.MODELS_URI, renderBusyComponent: function renderBusyComponent() {
	                    return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading " + detectorName + " Model" });
	                } }), function () {
	                return React.createElement("div", null, React.createElement(CenterContent_1.CenterContent, null, renderFaceDetectorSelection(), React.createElement(CenterContent_1.CenterContent, { flexDirection: "column", alignItems: "baseline" }, React.createElement(Mui.FormControlLabel, { control: React.createElement(Mui.Checkbox, { checked: _this2.state.withLandmarks, onChange: function onChange() {
	                            return _this2.setState({ withLandmarks: !_this2.state.withLandmarks });
	                        }, color: "primary" }), label: "Detect Face Landmarks" }), React.createElement(Mui.FormControlLabel, { control: React.createElement(Mui.Checkbox, { checked: !_this2.state.withBoxes, onChange: function onChange() {
	                            return _this2.setState({ withBoxes: !_this2.state.withBoxes });
	                        }, color: "primary" }), label: "Hide Bounding Boxes" }))), renderFaceDetectorControls(), _this2.props.children ? _this2.props.children(detectionOptions, _this2.state) : null);
	            });
	        });
	    };
	
	    return FaceAndLandmarkDetection;
	}(React.Component);
	
	exports.FaceAndLandmarkDetection = FaceAndLandmarkDetection;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var React = __webpack_require__(2);
	var face_api_js_react_1 = __webpack_require__(27);
	
	var TrackFaces = function (_React$Component) {
	    _inherits(TrackFaces, _React$Component);
	
	    function TrackFaces() {
	        _classCallCheck(this, TrackFaces);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.isActive = false;
	        _this.run = _asyncToGenerator(function* () {
	            if (!_this.isActive) {
	                return;
	            }
	            if (!_this.props.input) {
	                return setTimeout(_this.run, 0);
	            }
	            var _this$props$options = _this.props.options,
	                withLandmarks = _this$props$options.withLandmarks,
	                withBoxes = _this$props$options.withBoxes;
	
	            var detectionTask = faceapi.detectAllFaces(_this.props.input.element, _this.props.detectionOptions);
	            var results = yield withLandmarks ? detectionTask.withFaceLandmarks() : detectionTask;
	            face_api_js_react_1.displayResults(_this.props.overlay, results, { withBoxes: withBoxes });
	            setTimeout(_this.run, 0);
	        });
	        return _this;
	    }
	
	    TrackFaces.prototype.componentDidMount = function componentDidMount() {
	        this.isActive = true;
	        this.run();
	    };
	
	    TrackFaces.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.isActive = false;
	    };
	
	    TrackFaces.prototype.render = function render() {
	        return null;
	    };
	
	    return TrackFaces;
	}(React.Component);
	
	exports.TrackFaces = TrackFaces;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var face_api_js_react_1 = __webpack_require__(27);
	var React = __webpack_require__(2);
	
	var VideoWithOverlay = function (_React$Component) {
	    _inherits(VideoWithOverlay, _React$Component);
	
	    function VideoWithOverlay(props) {
	        _classCallCheck(this, VideoWithOverlay);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.isLoaded = false;
	        _this.onChange = _this.onChange.bind(_this);
	        _this.onVideoRef = _this.onVideoRef.bind(_this);
	        _this.onCanvasRef = _this.onCanvasRef.bind(_this);
	        _this.onPlay = _this.onPlay.bind(_this);
	        return _this;
	    }
	
	    VideoWithOverlay.prototype.onChange = function onChange() {
	        var video = this.video,
	            overlay = this.overlay,
	            isLoaded = this.isLoaded;
	
	        if (video && overlay && isLoaded) {
	            var _video$getBoundingCli = this.video.getBoundingClientRect(),
	                width = _video$getBoundingCli.width,
	                height = _video$getBoundingCli.height;
	
	            this.overlay.width = width, this.overlay.height = height;
	            this.props.onLoaded({ video: new face_api_js_react_1.MediaElement(video), overlay: overlay });
	        }
	    };
	
	    VideoWithOverlay.prototype.onVideoRef = function onVideoRef(el) {
	        this.video = el;
	        this.props.onVideoRef && this.props.onVideoRef();
	        this.onChange();
	    };
	
	    VideoWithOverlay.prototype.onCanvasRef = function onCanvasRef(el) {
	        this.overlay = el;
	        this.onChange();
	    };
	
	    VideoWithOverlay.prototype.onPlay = function onPlay() {
	        this.isLoaded = true;
	        this.onChange();
	    };
	
	    VideoWithOverlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var srcObject = nextProps.srcObject;
	
	        if (srcObject && this.props.srcObject !== srcObject) {
	            this.video.srcObject = srcObject;
	        }
	    };
	
	    VideoWithOverlay.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return false;
	    };
	
	    VideoWithOverlay.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.onChange();
	    };
	
	    VideoWithOverlay.prototype.componentDidMount = function componentDidMount() {
	        this.onChange();
	    };
	
	    VideoWithOverlay.prototype.render = function render() {
	        return React.createElement("div", { style: { position: 'relative' } }, React.createElement("video", { muted: true, autoPlay: true, style: { maxWidth: this.props.maxVideoWidth }, ref: this.onVideoRef, onPlay: this.onPlay, src: this.props.src }), React.createElement("canvas", { style: { position: 'absolute', top: 0, left: 0 }, ref: this.onCanvasRef }));
	    };
	
	    return VideoWithOverlay;
	}(React.Component);
	
	exports.VideoWithOverlay = VideoWithOverlay;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var face_api_js_1 = __webpack_require__(23);
	var React = __webpack_require__(2);
	var FaceAndLandmarkDetection_1 = __webpack_require__(97);
	var TrackFaces_1 = __webpack_require__(182);
	var VideoWithOverlay_1 = __webpack_require__(183);
	var const_1 = __webpack_require__(43);
	var Root_1 = __webpack_require__(72);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(VideoWithOverlay_1.VideoWithOverlay, { onLoaded: function onLoaded(_ref) {
	                var input = _ref.video,
	                    overlay = _ref.overlay;
	                return _this2.setState({ input: input, overlay: overlay });
	            }, maxVideoWidth: 800, src: const_1.EXAMPLE_VIDEO }), React.createElement(FaceAndLandmarkDetection_1.FaceAndLandmarkDetection, _extends({}, this.state, { initialFaceDetector: const_1.FACE_DETECTORS[0], initialTinyFaceDetectorOptions: new face_api_js_1.TinyFaceDetectorOptions({ inputSize: 416 }) }), function (detectionOptions, options) {
	            return React.createElement(TrackFaces_1.TrackFaces, _extends({ detectionOptions: detectionOptions, options: options }, _this2.state));
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-video-face-tracking-tsx-e858e2891b3bf399629b.js.map