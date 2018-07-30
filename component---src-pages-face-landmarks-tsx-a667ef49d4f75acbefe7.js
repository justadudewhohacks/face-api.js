webpackJsonp([190863916522640],{

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	
	var DetectFaceLandmarks = function (_React$Component) {
	    _inherits(DetectFaceLandmarks, _React$Component);
	
	    function DetectFaceLandmarks() {
	        _classCallCheck(this, DetectFaceLandmarks);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            faceLandmarks: null
	        };
	        return _this;
	    }
	
	    DetectFaceLandmarks.prototype.detectFaceLandmarks = function () {
	        var _ref = _asyncToGenerator(function* () {
	            var _this2 = this;
	
	            if (!this.props.imgs.every(function (img) {
	                return img.isLoaded;
	            })) {
	                return;
	            }
	            var faceLandmarks = yield Promise.all(this.props.imgs.map(function (_ref2) {
	                var img = _ref2.img;
	
	                return _this2.props.faceLandmarkNet.detectLandmarks(img);
	            }));
	            this.setState({
	                faceLandmarks: faceLandmarks
	            });
	        });
	
	        function detectFaceLandmarks() {
	            return _ref.apply(this, arguments);
	        }
	
	        return detectFaceLandmarks;
	    }();
	
	    DetectFaceLandmarks.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.props.faceLandmarkNet !== prevProps.faceLandmarkNet || this.props.imgs !== prevProps.imgs || this.props.children !== prevProps.children) {
	            this.detectFaceLandmarks();
	        }
	    };
	
	    DetectFaceLandmarks.prototype.componentDidMount = function componentDidMount() {
	        this.detectFaceLandmarks();
	    };
	
	    DetectFaceLandmarks.prototype.render = function render() {
	        return this.props.children(this.state.faceLandmarks);
	    };
	
	    return DetectFaceLandmarks;
	}(React.Component);
	
	exports.DetectFaceLandmarks = DetectFaceLandmarks;

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(42);
	var faceapi = __webpack_require__(30);
	var gatsby_link_1 = __webpack_require__(54);
	var React = __webpack_require__(2);
	var SelectableImage_1 = __webpack_require__(93);
	var const_1 = __webpack_require__(94);
	var DetectFaceLandmarks_1 = __webpack_require__(637);
	var LoadModels_1 = __webpack_require__(69);
	var ImageWrap_1 = __webpack_require__(67);
	var Root_1 = __webpack_require__(68);
	var MarginTop_1 = __webpack_require__(174);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            inputImg: new ImageWrap_1.ImageWrap(const_1.ALIGNED_FACE_IMAGES[30].url),
	            drawLines: true
	        };
	        _this.toggleDrawLines = function () {
	            _this.setState(function (state) {
	                return { drawLines: !state.drawLines };
	            });
	        };
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: this.state.inputImg.imageSrc, onLoaded: function onLoaded(_ref) {
	                var inputImg = _ref.img,
	                    overlay = _ref.overlay;
	                return _this2.setState({ inputImg: inputImg, overlay: overlay });
	            }, maxImageWidth: 150 }), React.createElement(MarginTop_1.MarginTop, null, React.createElement(core_1.FormControlLabel, { control: React.createElement(core_1.Checkbox, { checked: this.state.drawLines, onChange: this.toggleDrawLines, color: "primary" }), label: "Draw Lines" })), React.createElement(LoadModels_1.LoadModels, { faceLandmarkModelUrl: gatsby_link_1.withPrefix('/models') }, function (_ref2) {
	            var faceLandmarkNet = _ref2.faceLandmarkNet;
	            return React.createElement(DetectFaceLandmarks_1.DetectFaceLandmarks, { imgs: [_this2.state.inputImg], faceLandmarkNet: faceLandmarkNet }, function (faceLandmarks) {
	                var _state = _this2.state,
	                    overlay = _state.overlay,
	                    drawLines = _state.drawLines;
	
	                if (overlay && faceLandmarks) {
	                    var width = overlay.width,
	                        height = overlay.height;
	
	                    overlay.getContext('2d').clearRect(0, 0, width, height);
	                    faceapi.drawLandmarks(overlay, faceLandmarks.map(function (l) {
	                        return l.forSize(width, height);
	                    }), { drawLines: drawLines });
	                }
	                return null;
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(32);
	exports.MarginTop = styled_components_1.default.div(_templateObject);

/***/ })

});
//# sourceMappingURL=component---src-pages-face-landmarks-tsx-a667ef49d4f75acbefe7.js.map