webpackJsonp([165320778034674],{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(42);
	var React = __webpack_require__(2);
	exports.FaceSimilarity = function (props) {
	    return React.createElement(core_1.FormControl, null, React.createElement(core_1.InputLabel, { htmlFor: "distance" }, "Distance:"), React.createElement(core_1.Input, { id: "distance", value: props.text, style: { backgroundColor: props.isMatch ? '#b2ff59' : '#ea605d' } }));
	};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	
	var ComputeFaceDescriptors = function (_React$Component) {
	    _inherits(ComputeFaceDescriptors, _React$Component);
	
	    function ComputeFaceDescriptors() {
	        _classCallCheck(this, ComputeFaceDescriptors);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            faceDescriptors: null
	        };
	        return _this;
	    }
	
	    ComputeFaceDescriptors.prototype.computeDescriptors = function () {
	        var _ref = _asyncToGenerator(function* (prevImgs) {
	            var _this2 = this;
	
	            if (!this.props.imgs.every(function (img) {
	                return img.isLoaded;
	            })) {
	                return;
	            }
	            var faceDescriptors = yield Promise.all(this.props.imgs.map(function (imgWrap, idx) {
	                if (_this2.state.faceDescriptors && prevImgs && imgWrap === prevImgs[idx]) {
	                    return Promise.resolve(_this2.state.faceDescriptors[idx]);
	                }
	                return _this2.props.faceRecognitionNet.computeFaceDescriptor(imgWrap.img);
	            }));
	            this.setState({
	                faceDescriptors: faceDescriptors
	            });
	        });
	
	        function computeDescriptors(_x) {
	            return _ref.apply(this, arguments);
	        }
	
	        return computeDescriptors;
	    }();
	
	    ComputeFaceDescriptors.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.props.faceRecognitionNet !== prevProps.faceRecognitionNet || this.props.imgs !== prevProps.imgs || this.props.children !== prevProps.children) {
	            this.computeDescriptors(prevProps.imgs);
	        }
	    };
	
	    ComputeFaceDescriptors.prototype.componentDidMount = function componentDidMount() {
	        this.computeDescriptors();
	    };
	
	    ComputeFaceDescriptors.prototype.render = function render() {
	        return this.props.children(this.state.faceDescriptors);
	    };
	
	    return ComputeFaceDescriptors;
	}(React.Component);
	
	exports.ComputeFaceDescriptors = ComputeFaceDescriptors;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(30);
	var gatsby_link_1 = __webpack_require__(54);
	var React = __webpack_require__(2);
	var FaceSimilarity_1 = __webpack_require__(628);
	var SelectableImage_1 = __webpack_require__(93);
	var const_1 = __webpack_require__(94);
	var ComputeFaceDescriptors_1 = __webpack_require__(636);
	var LoadModels_1 = __webpack_require__(69);
	var ImageWrap_1 = __webpack_require__(67);
	var Root_1 = __webpack_require__(68);
	var MarginTop_1 = __webpack_require__(174);
	var SideBySide_1 = __webpack_require__(95);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            inputImg1: new ImageWrap_1.ImageWrap(const_1.ALIGNED_FACE_IMAGES[30].url),
	            inputImg2: new ImageWrap_1.ImageWrap(const_1.ALIGNED_FACE_IMAGES[31].url)
	        };
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(SideBySide_1.SideBySide, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: this.state.inputImg1.imageSrc, onLoaded: function onLoaded(_ref) {
	                var inputImg1 = _ref.img;
	                return _this2.setState({ inputImg1: inputImg1 });
	            }, maxImageWidth: 150 }), React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: this.state.inputImg2.imageSrc, onLoaded: function onLoaded(_ref2) {
	                var inputImg2 = _ref2.img;
	                return _this2.setState({ inputImg2: inputImg2 });
	            }, maxImageWidth: 150 })), React.createElement(MarginTop_1.MarginTop, null, React.createElement(LoadModels_1.LoadModels, { faceRecognitionModelUrl: gatsby_link_1.withPrefix('/models') }, function (_ref3) {
	            var faceRecognitionNet = _ref3.faceRecognitionNet;
	            return React.createElement(ComputeFaceDescriptors_1.ComputeFaceDescriptors, { imgs: [_this2.state.inputImg1, _this2.state.inputImg2], faceRecognitionNet: faceRecognitionNet }, function (faceDescriptors) {
	                if (!faceDescriptors) {
	                    return null;
	                }
	                var distance = faceapi.euclideanDistance(faceDescriptors[0], faceDescriptors[1]);
	                return React.createElement(FaceSimilarity_1.FaceSimilarity, { text: "" + faceapi.round(distance), isMatch: distance < 0.6 });
	            });
	        })));
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

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(32);
	exports.SideBySide = styled_components_1.default.div(_templateObject);

/***/ })

});
//# sourceMappingURL=component---src-pages-face-similarity-tsx-cda096628752a5548043.js.map