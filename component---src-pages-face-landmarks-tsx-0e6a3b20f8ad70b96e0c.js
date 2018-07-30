webpackJsonp([190863916522640],{

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var detectFaceLandmarks = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        var faceLandmarks = yield Promise.all(props.imgs.map(function (_ref2) {
	            var img = _ref2.img;
	
	            return props.faceLandmarkNet.detectLandmarks(img);
	        }));
	        return {
	            faceLandmarks: faceLandmarks
	        };
	    });
	
	    return function detectFaceLandmarks(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var ModalLoader_1 = __webpack_require__(29);
	var withAsyncRendering_1 = __webpack_require__(32);
	var React = __webpack_require__(2);
	
	exports.DetectFaceLandmarks = withAsyncRendering_1.withAsyncRendering(detectFaceLandmarks, function () {
	    return React.createElement(ModalLoader_1.ModalLoader, { title: "Detecting Landmarks" });
	});

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var detectFaces = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        var faceDetections = yield props.faceDetectionNet.locateFaces(props.img.img, props.minConfidence);
	        return {
	            faceDetections: faceDetections
	        };
	    });
	
	    return function detectFaces(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var withAsyncRendering_1 = __webpack_require__(32);
	var ModalLoader_1 = __webpack_require__(29);
	var React = __webpack_require__(2);
	
	exports.DetectFaces = withAsyncRendering_1.withAsyncRendering(detectFaces, function () {
	    return React.createElement(ModalLoader_1.ModalLoader, { title: "Detecting Faces" });
	});

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var extractFaces = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        var canvases = yield faceapi.extractFaces(props.img.img, props.faceDetections);
	        return {
	            canvases: canvases
	        };
	    });
	
	    return function extractFaces(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(40);
	var withAsyncRendering_1 = __webpack_require__(32);
	
	exports.ExtractFaces = withAsyncRendering_1.withAsyncRendering(extractFaces);

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Mui = __webpack_require__(36);
	var gatsby_link_1 = __webpack_require__(48);
	var React = __webpack_require__(2);
	var DisplayResults_1 = __webpack_require__(118);
	var ModalLoader_1 = __webpack_require__(29);
	var SelectableImage_1 = __webpack_require__(95);
	var const_1 = __webpack_require__(96);
	var DetectFaceLandmarks_1 = __webpack_require__(643);
	var DetectFaces_1 = __webpack_require__(176);
	var ExtractFaces_1 = __webpack_require__(645);
	var LoadModels_1 = __webpack_require__(71);
	var ImageWrap_1 = __webpack_require__(69);
	var Root_1 = __webpack_require__(70);
	var MarginTop_1 = __webpack_require__(179);
	
	var DetectAndDrawFaceLandmarksForFaceImage = function (_React$Component) {
	    _inherits(DetectAndDrawFaceLandmarksForFaceImage, _React$Component);
	
	    function DetectAndDrawFaceLandmarksForFaceImage() {
	        _classCallCheck(this, DetectAndDrawFaceLandmarksForFaceImage);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    DetectAndDrawFaceLandmarksForFaceImage.prototype.render = function render() {
	        var _this2 = this;
	
	        return React.createElement(DetectFaceLandmarks_1.DetectFaceLandmarks, { imgs: this.props.inputImgs, faceLandmarkNet: this.props.faceLandmarkNet }, function (_ref) {
	            var faceLandmarks = _ref.faceLandmarks,
	                isBusy = _ref.isBusy;
	
	            if (isBusy) {
	                return React.createElement(ModalLoader_1.ModalLoader, { title: "Detecting Face Landmarks" });
	            }
	            return React.createElement(DisplayResults_1.DisplayResults, _extends({}, _this2.props, { faceLandmarks: faceLandmarks }));
	        });
	    };
	
	    return DetectAndDrawFaceLandmarksForFaceImage;
	}(React.Component);
	
	var DetectAndDrawFaceLandmarks = function (_React$Component2) {
	    _inherits(DetectAndDrawFaceLandmarks, _React$Component2);
	
	    function DetectAndDrawFaceLandmarks() {
	        _classCallCheck(this, DetectAndDrawFaceLandmarks);
	
	        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	    }
	
	    DetectAndDrawFaceLandmarks.prototype.render = function render() {
	        var _this4 = this;
	
	        if (this.props.faceDetections) {
	            return React.createElement(ExtractFaces_1.ExtractFaces, { img: this.props.inputImg, faceDetections: this.props.faceDetections }, function (_ref2) {
	                var canvases = _ref2.canvases,
	                    isBusy = _ref2.isBusy;
	                return !isBusy && React.createElement(DetectAndDrawFaceLandmarksForFaceImage, _extends({}, _this4.props, { inputImgs: canvases.map(function (canvas) {
	                        return new ImageWrap_1.ImageWrap('none', canvas);
	                    }) }));
	            });
	        }
	        return React.createElement(DetectAndDrawFaceLandmarksForFaceImage, _extends({}, this.props, { inputImgs: [this.props.inputImg] }));
	    };
	
	    return DetectAndDrawFaceLandmarks;
	}(React.Component);
	
	var default_1 = function (_React$Component3) {
	    _inherits(default_1, _React$Component3);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this5 = _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	
	        _this5.state = {
	            tabIndex: 0,
	            inputImg: new ImageWrap_1.ImageWrap(const_1.ALIGNED_FACE_IMAGES[30].url),
	            drawLines: true
	        };
	        _this5.toggleDrawLines = function () {
	            _this5.setState({ drawLines: !_this5.state.drawLines });
	        };
	        _this5.onTabIndexChanged = function (_, tabIndex) {
	            _this5.setState({ tabIndex: tabIndex, inputImg: new ImageWrap_1.ImageWrap('none') });
	        };
	        _this5.isReadyForDetection = function () {
	            return !!_this5.state.inputImg && !!_this5.state.inputImg.img && !!_this5.state.overlay;
	        };
	        return _this5;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this6 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(LoadModels_1.LoadModels, { faceDetectionModelUrl: gatsby_link_1.withPrefix('/models'), faceLandmarkModelUrl: gatsby_link_1.withPrefix('/models') }, function (_ref3) {
	            var faceDetectionNet = _ref3.faceDetectionNet,
	                faceLandmarkNet = _ref3.faceLandmarkNet;
	            return React.createElement("div", null, React.createElement(Mui.Tabs, { value: _this6.state.tabIndex, onChange: _this6.onTabIndexChanged, indicatorColor: "primary", textColor: "primary", fullWidth: true }, React.createElement(Mui.Tab, { label: "Preview", value: 0 }), React.createElement(Mui.Tab, { label: "Use Own Images", value: 1 })), _this6.state.tabIndex === 0 ? React.createElement("div", null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: _this6.state.inputImg.imageSrc, onLoaded: function onLoaded(_ref4) {
	                    var inputImg = _ref4.img,
	                        overlay = _ref4.overlay;
	                    return _this6.setState({ inputImg: inputImg, overlay: overlay });
	                }, maxImageWidth: 150, selectionType: SelectableImage_1.SelectionTypes.SELECT }), _this6.isReadyForDetection() && React.createElement(DetectAndDrawFaceLandmarks, _extends({}, _this6.state, { overlay: _this6.state.overlay, faceLandmarkNet: faceLandmarkNet }))) : React.createElement("div", null, React.createElement(SelectableImage_1.SelectableImage, { onLoaded: function onLoaded(_ref5) {
	                    var inputImg = _ref5.img,
	                        overlay = _ref5.overlay;
	                    return _this6.setState({ inputImg: inputImg, overlay: overlay });
	                }, selectionType: SelectableImage_1.SelectionTypes.FILE }), _this6.isReadyForDetection() && React.createElement(DetectFaces_1.DetectFaces, { faceDetectionNet: faceDetectionNet, img: _this6.state.inputImg, minConfidence: 0.5 }, function (_ref6) {
	                var faceDetections = _ref6.faceDetections;
	                return React.createElement(DetectAndDrawFaceLandmarks, _extends({}, _this6.state, { overlay: _this6.state.overlay, faceDetections: faceDetections, faceLandmarkNet: faceLandmarkNet }));
	            })));
	        }), React.createElement(MarginTop_1.MarginTop, null, React.createElement(Mui.FormControlLabel, { control: React.createElement(Mui.Checkbox, { checked: this.state.drawLines, onChange: this.toggleDrawLines, color: "primary" }), label: "Draw Lines" })));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(49);
	exports.MarginTop = styled_components_1.default.div(_templateObject);

/***/ })

});
//# sourceMappingURL=component---src-pages-face-landmarks-tsx-0e6a3b20f8ad70b96e0c.js.map