webpackJsonp([65913644794675],{

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var detectFacesWithLandmarks = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        if (!props.input) {
	            return null;
	        }
	        return {
	            faceDetectionsWithLandmarks: yield faceapi.detectAllFaces(props.input.element, props.detectionOptions).withFaceLandmarks()
	        };
	    });
	
	    return function detectFacesWithLandmarks(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var withAsyncRendering_1 = __webpack_require__(55);
	
	exports.DetectFacesWithLandmarks = withAsyncRendering_1.withAsyncRendering(detectFacesWithLandmarks);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Mui = __webpack_require__(28);
	var face_api_js_react_1 = __webpack_require__(26);
	var React = __webpack_require__(2);
	var ModalLoader_1 = __webpack_require__(73);
	var const_1 = __webpack_require__(38);
	var SelectFaceDetector_1 = __webpack_require__(100);
	var CenterContent_1 = __webpack_require__(62);
	
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

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var face_api_js_1 = __webpack_require__(23);
	var DisplayResults_1 = __webpack_require__(121);
	var React = __webpack_require__(2);
	var DetectFaces_1 = __webpack_require__(315);
	var DetectFacesWithLandmarks_1 = __webpack_require__(702);
	var FaceAndLandmarkDetection_1 = __webpack_require__(98);
	var SelectableImage_1 = __webpack_require__(99);
	var const_1 = __webpack_require__(38);
	var Root_1 = __webpack_require__(61);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {};
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.EXAMPLE_IMAGES, initialImageSrc: const_1.EXAMPLE_IMAGES[0].url, onLoaded: function onLoaded(_ref) {
	                var input = _ref.img,
	                    overlay = _ref.overlay;
	                return _this2.setState({ input: input, overlay: overlay });
	            }, selectionType: SelectableImage_1.SelectionTypes.BOTH, imageStyle: { maxWidth: 800 }, imgId: "img" }), React.createElement(FaceAndLandmarkDetection_1.FaceAndLandmarkDetection, _extends({}, this.state, { initialFaceDetector: const_1.FACE_DETECTORS[0], initialTinyFaceDetectorOptions: new face_api_js_1.TinyFaceDetectorOptions({ inputSize: 512 }) }), function (detectionOptions, _ref2) {
	            var withLandmarks = _ref2.withLandmarks,
	                withBoxes = _ref2.withBoxes;
	            return withLandmarks ? React.createElement(DetectFacesWithLandmarks_1.DetectFacesWithLandmarks, { input: _this2.state.input, detectionOptions: detectionOptions }, function (_ref3) {
	                var faceDetectionsWithLandmarks = _ref3.faceDetectionsWithLandmarks;
	                return React.createElement(DisplayResults_1.DisplayResults, { overlay: _this2.state.overlay, results: faceDetectionsWithLandmarks, displayResultsOptions: { withBoxes: withBoxes } });
	            }) : React.createElement(DetectFaces_1.DetectFaces, { input: _this2.state.input, detectionOptions: detectionOptions }, function (_ref4) {
	                var faceDetections = _ref4.faceDetections;
	                return React.createElement(DisplayResults_1.DisplayResults, { overlay: _this2.state.overlay, results: faceDetections, displayResultsOptions: { withBoxes: withBoxes } });
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-face-and-landmark-detection-tsx-b2a7c390aa055e1c0209.js.map