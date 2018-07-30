webpackJsonp([116906278068717],{

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	
	var DetectFaces = function (_React$Component) {
	    _inherits(DetectFaces, _React$Component);
	
	    function DetectFaces() {
	        _classCallCheck(this, DetectFaces);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            faceDetections: null
	        };
	        return _this;
	    }
	
	    DetectFaces.prototype.detectFaces = function () {
	        var _ref = _asyncToGenerator(function* () {
	            if (!this.props.img.isLoaded) {
	                return;
	            }
	            var faceDetections = yield this.props.faceDetectionNet.locateFaces(this.props.img.img, this.props.minConfidence);
	            this.setState({
	                faceDetections: faceDetections
	            });
	        });
	
	        function detectFaces() {
	            return _ref.apply(this, arguments);
	        }
	
	        return detectFaces;
	    }();
	
	    DetectFaces.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.props.faceDetectionNet !== prevProps.faceDetectionNet || this.props.minConfidence !== prevProps.minConfidence || this.props.img !== prevProps.img || this.props.children !== prevProps.children) {
	            this.detectFaces();
	        }
	    };
	
	    DetectFaces.prototype.componentDidMount = function componentDidMount() {
	        this.detectFaces();
	    };
	
	    DetectFaces.prototype.render = function render() {
	        return this.props.children(this.state.faceDetections);
	    };
	
	    return DetectFaces;
	}(React.Component);
	
	exports.DetectFaces = DetectFaces;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(30);
	var gatsby_link_1 = __webpack_require__(54);
	var React = __webpack_require__(2);
	var SelectableImage_1 = __webpack_require__(93);
	var const_1 = __webpack_require__(94);
	var DetectFaces_1 = __webpack_require__(638);
	var LoadModels_1 = __webpack_require__(69);
	var ImageWrap_1 = __webpack_require__(67);
	var Root_1 = __webpack_require__(68);
	
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
	            }, maxImageWidth: 800 }), React.createElement(LoadModels_1.LoadModels, { faceDetectionModelUrl: gatsby_link_1.withPrefix('/models') }, function (_ref2) {
	            var faceDetectionNet = _ref2.faceDetectionNet;
	            return React.createElement(DetectFaces_1.DetectFaces, { faceDetectionNet: faceDetectionNet, img: _this2.state.inputImg, minConfidence: _this2.state.minDetectionScore }, function (faceDetections) {
	                var overlay = _this2.state.overlay;
	
	                if (overlay && faceDetections) {
	                    var width = overlay.width,
	                        height = overlay.height;
	
	                    overlay.getContext('2d').clearRect(0, 0, width, height);
	                    faceapi.drawDetection(overlay, faceDetections.map(function (det) {
	                        return det.forSize(width, height);
	                    }));
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
//# sourceMappingURL=component---src-pages-face-detection-tsx-d13a92108059e3e9cd5d.js.map