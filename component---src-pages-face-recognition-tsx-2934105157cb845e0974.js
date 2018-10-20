webpackJsonp([6832681848579],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var detectFacesWithLandmarksWithDescriptors = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        if (!props.input) {
	            return null;
	        }
	        return {
	            fullFaceDescriptions: yield faceapi.detectAllFaces(props.input.element, props.detectionOptions).withFaceLandmarks().withFaceDescriptors()
	        };
	    });
	
	    return function detectFacesWithLandmarksWithDescriptors(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var withAsyncRendering_1 = __webpack_require__(55);
	
	exports.DetectFacesWithLandmarksWithDescriptors = withAsyncRendering_1.withAsyncRendering(detectFacesWithLandmarksWithDescriptors);

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var React = __webpack_require__(2);
	var face_api_js_1 = __webpack_require__(23);
	var face_api_js_react_1 = __webpack_require__(26);
	exports.DisplayMatches = function (props) {
	    var input = props.input,
	        fullFaceDescriptions = props.fullFaceDescriptions,
	        overlay = props.overlay,
	        withScore = props.withScore,
	        getBestMatch = props.getBestMatch;
	
	    var boxesWithText = fullFaceDescriptions.map(function (fd) {
	        return fd.forSize(overlay.width, overlay.height);
	    }).map(function (fd) {
	        var bestMatch = getBestMatch(fd.descriptor);
	        var text = (bestMatch.distance < 0.6 ? bestMatch.label : 'unknown') + " (" + faceapi.round(bestMatch.distance) + ")";
	        return new face_api_js_1.BoxWithText(fd.detection.box, text);
	    });
	    return React.createElement(face_api_js_react_1.DisplayResults, { input: input, results: boxesWithText, overlay: overlay, displayResultsOptions: { withScore: withScore } }, props.children);
	};

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var face_api_js_1 = __webpack_require__(23);
	var face_api_js_react_1 = __webpack_require__(26);
	var DisplayResults_1 = __webpack_require__(121);
	var React = __webpack_require__(2);
	var DetectFacesWithLandmarksWithDescriptors_1 = __webpack_require__(181);
	var DisplayMatches_1 = __webpack_require__(183);
	var ModalLoader_1 = __webpack_require__(73);
	var SelectableImage_1 = __webpack_require__(99);
	var const_1 = __webpack_require__(38);
	var SelectFaceDetector_1 = __webpack_require__(100);
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
	                var input1 = _ref.img,
	                    overlay1 = _ref.overlay;
	                return _this2.setState({ input1: input1, overlay1: overlay1 });
	            }, selectionType: SelectableImage_1.SelectionTypes.BOTH, imageStyle: { maxWidth: 500 }, imgId: "img1" }), React.createElement(SelectableImage_1.SelectableImage, { items: const_1.EXAMPLE_IMAGES, initialImageSrc: const_1.EXAMPLE_IMAGES[3].url, onLoaded: function onLoaded(_ref2) {
	                var input2 = _ref2.img,
	                    overlay2 = _ref2.overlay;
	                return _this2.setState({ input2: input2, overlay2: overlay2 });
	            }, selectionType: SelectableImage_1.SelectionTypes.BOTH, imageStyle: { maxWidth: 500 }, imgId: "img2" }), React.createElement(face_api_js_react_1.LoadModels, { faceLandmarkModelUrl: const_1.MODELS_URI, faceRecognitionModelUrl: const_1.MODELS_URI, renderBusyComponent: function renderBusyComponent() {
	                return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading Models" });
	            } }, function () {
	            return React.createElement(SelectFaceDetector_1.SelectFaceDetector, { initialFaceDetector: const_1.FACE_DETECTORS[0], initialTinyFaceDetectorOptions: new face_api_js_1.TinyFaceDetectorOptions({ inputSize: 512 }) }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
	                return React.createElement(face_api_js_react_1.LoadModels, _extends({}, const_1.getFaceDetectionModelUri(detectorName, const_1.MODELS_URI), { renderBusyComponent: function renderBusyComponent() {
	                        return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading " + detectorName + " Model" });
	                    } }), function () {
	                    return React.createElement("div", null, renderFaceDetectorSelection(), renderFaceDetectorControls(), React.createElement(DetectFacesWithLandmarksWithDescriptors_1.DetectFacesWithLandmarksWithDescriptors, { input: _this2.state.input1, detectionOptions: detectionOptions }, function (_ref3) {
	                        var results1 = _ref3.fullFaceDescriptions;
	
	                        var faceMatcher = new faceapi.FaceMatcher(results1);
	                        var overlay1 = _this2.state.overlay1;
	
	                        return React.createElement(DetectFacesWithLandmarksWithDescriptors_1.DetectFacesWithLandmarksWithDescriptors, { input: _this2.state.input2, detectionOptions: detectionOptions }, function (_ref4) {
	                            var results2 = _ref4.fullFaceDescriptions;
	                            return React.createElement("span", null, React.createElement(DisplayResults_1.DisplayResults, { input: _this2.state.input1, overlay: overlay1, results: faceMatcher.labeledDescriptors.map(function (ld, idx) {
	                                    return new face_api_js_1.BoxWithText(results1[idx].detection.forSize(overlay1.width, overlay1.height).box, ld.label);
	                                }) }), React.createElement(DisplayMatches_1.DisplayMatches, { input: _this2.state.input2, fullFaceDescriptions: results2, overlay: _this2.state.overlay2, getBestMatch: function getBestMatch(desc) {
	                                    return faceMatcher.findBestMatch(desc);
	                                }, withScore: true }));
	                        });
	                    }));
	                });
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-face-recognition-tsx-2934105157cb845e0974.js.map