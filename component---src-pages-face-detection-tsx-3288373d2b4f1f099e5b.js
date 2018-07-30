webpackJsonp([116906278068717],{

/***/ 175:
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

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var DisplayResults_1 = __webpack_require__(117);
	var SelectableImage_1 = __webpack_require__(94);
	var const_1 = __webpack_require__(95);
	var DetectFaces_1 = __webpack_require__(175);
	var LoadModels_1 = __webpack_require__(70);
	var ImageWrap_1 = __webpack_require__(68);
	var Root_1 = __webpack_require__(69);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            inputImg: new ImageWrap_1.ImageWrap(const_1.EXAMPLE_IMAGES[0].url),
	            minDetectionScore: 0.5
	        };
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.EXAMPLE_IMAGES, initialImageSrc: this.state.inputImg.imageSrc, onLoaded: function onLoaded(_ref) {
	                var inputImg = _ref.img,
	                    overlay = _ref.overlay;
	                return _this2.setState({ inputImg: inputImg, overlay: overlay });
	            }, maxImageWidth: 800, selectionType: SelectableImage_1.SelectionTypes.BOTH }), React.createElement(LoadModels_1.LoadModels, { faceDetectionModelUrl: MODELS_URI }, function (_ref2) {
	            var faceDetectionNet = _ref2.faceDetectionNet;
	            return React.createElement(DetectFaces_1.DetectFaces, { faceDetectionNet: faceDetectionNet, img: _this2.state.inputImg, minConfidence: _this2.state.minDetectionScore }, function (_ref3) {
	                var faceDetections = _ref3.faceDetections;
	                return React.createElement(DisplayResults_1.DisplayResults, { overlay: _this2.state.overlay, faceDetections: faceDetections });
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-face-detection-tsx-3288373d2b4f1f099e5b.js.map