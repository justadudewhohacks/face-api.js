webpackJsonp([25081118314623],{

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(28);
	var React = __webpack_require__(2);
	exports.FaceSimilarity = function (props) {
	    return React.createElement(core_1.FormControl, null, React.createElement(core_1.InputLabel, { htmlFor: "distance" }, "Distance:"), React.createElement(core_1.Input, { id: "distance", value: props.text, style: { backgroundColor: props.isMatch ? '#b2ff59' : '#ea605d' } }));
	};

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(23);
	var face_api_js_react_1 = __webpack_require__(27);
	var React = __webpack_require__(2);
	var FaceSimilarity_1 = __webpack_require__(707);
	var ModalLoader_1 = __webpack_require__(98);
	var SelectableImage_1 = __webpack_require__(119);
	var const_1 = __webpack_require__(43);
	var Root_1 = __webpack_require__(72);
	var MarginTop_1 = __webpack_require__(184);
	var SideBySide_1 = __webpack_require__(185);
	
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
	        return React.createElement(Root_1.Root, null, React.createElement(SideBySide_1.SideBySide, null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: const_1.ALIGNED_FACE_IMAGES[30].url, onLoaded: function onLoaded(_ref) {
	                var inputImg1 = _ref.img;
	                return _this2.setState({ inputImg1: inputImg1 });
	            }, imageStyle: { maxWidth: 150 }, imgId: "img1" }), React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: const_1.ALIGNED_FACE_IMAGES[31].url, onLoaded: function onLoaded(_ref2) {
	                var inputImg2 = _ref2.img;
	                return _this2.setState({ inputImg2: inputImg2 });
	            }, imageStyle: { maxWidth: 150 }, imgId: "img2" })), React.createElement(MarginTop_1.MarginTop, null, React.createElement(face_api_js_react_1.LoadModels, { faceRecognitionModelUrl: const_1.MODELS_URI, renderBusyComponent: function renderBusyComponent() {
	                return React.createElement(ModalLoader_1.ModalLoader, { title: "Loading Face Recognition Model" });
	            } }, function () {
	            return React.createElement(face_api_js_react_1.ComputeFaceDescriptors, { inputs: [_this2.state.inputImg1, _this2.state.inputImg2], renderBusyComponent: function renderBusyComponent() {
	                    return React.createElement(ModalLoader_1.ModalLoader, { title: "Computing Face Descriptors" });
	                } }, function (_ref3) {
	                var faceDescriptors = _ref3.faceDescriptors;
	
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(57);
	exports.MarginTop = styled_components_1.default.div(_templateObject);

/***/ })

});
//# sourceMappingURL=component---src-pages-bbt-face-similarity-tsx-3b9bfe3491c89d1a7ac3.js.map