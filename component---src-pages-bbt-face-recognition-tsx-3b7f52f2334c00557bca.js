webpackJsonp([208521908458735],{

/***/ 701:
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
	var withAsyncRendering_1 = __webpack_require__(60);
	
	exports.DetectFacesWithLandmarksWithDescriptors = withAsyncRendering_1.withAsyncRendering(detectFacesWithLandmarksWithDescriptors);

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var React = __webpack_require__(2);
	var face_api_js_1 = __webpack_require__(23);
	var face_api_js_react_1 = __webpack_require__(27);
	exports.DisplayMatches = function (props) {
	    var fullFaceDescriptions = props.fullFaceDescriptions,
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
	    return React.createElement(face_api_js_react_1.DisplayResults, { results: boxesWithText, overlay: overlay, displayResultsOptions: { withScore: withScore } }, props.children);
	};

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var initRefDescriptors = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        var refDescriptors = yield Promise.all(props.refDataSources.map(function () {
	            var _ref2 = _asyncToGenerator(function* (_ref3) {
	                var label = _ref3.label,
	                    url = _ref3.url;
	
	                var img = yield faceapi.bufferToImage((yield (yield fetch(url)).blob()));
	                var descriptor = yield faceapi.nets.faceRecognitionNet.computeFaceDescriptor(img);
	                return {
	                    label: label.replace('1.png', ''),
	                    descriptor: descriptor
	                };
	            });
	
	            return function (_x2) {
	                return _ref2.apply(this, arguments);
	            };
	        }()));
	        var getBestMatch = function getBestMatch(queryDescriptor) {
	            return refDescriptors.map(function (ref) {
	                return {
	                    label: ref.label,
	                    distance: faceapi.euclideanDistance(ref.descriptor, queryDescriptor)
	                };
	            }).reduce(function (best, curr) {
	                return curr.distance < best.distance ? curr : best;
	            });
	        };
	        return {
	            refDescriptors: refDescriptors,
	            getBestMatch: getBestMatch
	        };
	    });
	
	    return function initRefDescriptors(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var face_api_js_react_1 = __webpack_require__(27);
	
	exports.ComputeRefDescriptors = face_api_js_react_1.withAsyncRendering(initRefDescriptors);

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var face_api_js_react_1 = __webpack_require__(27);
	var React = __webpack_require__(2);
	var DetectFacesWithLandmarksWithDescriptors_1 = __webpack_require__(701);
	var DisplayMatches_1 = __webpack_require__(706);
	var ModalLoader_1 = __webpack_require__(98);
	var SelectableImage_1 = __webpack_require__(119);
	var const_1 = __webpack_require__(43);
	var ComputeRefDescriptors_1 = __webpack_require__(711);
	var SelectFaceDetector_1 = __webpack_require__(120);
	var Root_1 = __webpack_require__(72);
	var face_api_js_1 = __webpack_require__(23);
	var REF_DATA_SOURCES = const_1.ALIGNED_FACE_IMAGES_BY_CLASS.map(function (srcsByClass) {
	    return srcsByClass[0];
	});
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {};
	        _this.onTabIndexChanged = function () {
	            _this.setState({ inputImg: undefined });
	        };
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.EXAMPLE_IMAGES, initialImageSrc: const_1.EXAMPLE_IMAGES[0].url, onLoaded: function onLoaded(_ref) {
	                var inputImg = _ref.img,
	                    overlay = _ref.overlay;
	                return _this2.setState({ inputImg: inputImg, overlay: overlay });
	            }, selectionType: SelectableImage_1.SelectionTypes.BOTH, imageStyle: { maxWidth: 800 }, imgId: "img" }), React.createElement(face_api_js_react_1.LoadModels, { faceLandmarkModelUrl: "/models", faceRecognitionModelUrl: "/models", renderBusyComponent: function renderBusyComponent() {
	                return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading Models" });
	            } }, function () {
	            return React.createElement(ComputeRefDescriptors_1.ComputeRefDescriptors, { refDataSources: REF_DATA_SOURCES, renderBusyComponent: function renderBusyComponent() {
	                    return React.createElement(ModalLoader_1.ModalLoader, { title: "Computing Reference Descriptors" });
	                } }, function (_ref2) {
	                var getBestMatch = _ref2.getBestMatch;
	                return React.createElement(SelectFaceDetector_1.SelectFaceDetector, { initialFaceDetector: const_1.FACE_DETECTORS[0], initialTinyFaceDetectorOptions: new face_api_js_1.TinyFaceDetectorOptions({ inputSize: 512 }) }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
	                    return React.createElement(face_api_js_react_1.LoadModels, _extends({}, const_1.getFaceDetectionModelUri(detectorName, const_1.MODELS_URI), { renderBusyComponent: function renderBusyComponent() {
	                            return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading " + detectorName + " Model" });
	                        } }), function () {
	                        return React.createElement("div", null, renderFaceDetectorSelection(), renderFaceDetectorControls(), React.createElement(DetectFacesWithLandmarksWithDescriptors_1.DetectFacesWithLandmarksWithDescriptors, { input: _this2.state.inputImg, detectionOptions: detectionOptions }, function (_ref3) {
	                            var fullFaceDescriptions = _ref3.fullFaceDescriptions;
	                            return React.createElement(DisplayMatches_1.DisplayMatches, { fullFaceDescriptions: fullFaceDescriptions, overlay: _this2.state.overlay, getBestMatch: getBestMatch, withScore: true });
	                        }));
	                    });
	                });
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-bbt-face-recognition-tsx-3b7f52f2334c00557bca.js.map