webpackJsonp([73097459027174],{

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Mui = __webpack_require__(28);
	var face_api_js_react_1 = __webpack_require__(26);
	var DisplayResults_1 = __webpack_require__(121);
	var React = __webpack_require__(2);
	var DetectFaceLandmarks_1 = __webpack_require__(314);
	var SelectableImage_1 = __webpack_require__(99);
	var const_1 = __webpack_require__(38);
	var Root_1 = __webpack_require__(61);
	var MarginTop_1 = __webpack_require__(186);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1() {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            drawLines: true
	        };
	        _this.toggleDrawLines = function () {
	            _this.setState({ drawLines: !_this.state.drawLines });
	        };
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
	        return React.createElement(Root_1.Root, null, React.createElement(face_api_js_react_1.LoadModels, { faceLandmarkModelUrl: const_1.MODELS_URI }, function () {
	            return React.createElement("div", null, React.createElement(SelectableImage_1.SelectableImage, { items: const_1.ALIGNED_FACE_IMAGES, initialImageSrc: const_1.ALIGNED_FACE_IMAGES[30].url, onLoaded: function onLoaded(_ref) {
	                    var inputImg = _ref.img,
	                        overlay = _ref.overlay;
	                    return _this2.setState({ inputImg: inputImg, overlay: overlay });
	                }, selectionType: SelectableImage_1.SelectionTypes.SELECT, imageStyle: { maxWidth: 150 }, imgId: "img" }), React.createElement(DetectFaceLandmarks_1.DetectFaceLandmarks, { input: _this2.state.inputImg }, function (_ref2) {
	                var faceLandmarks = _ref2.faceLandmarks;
	                return React.createElement(DisplayResults_1.DisplayResults, { input: _this2.state.inputImg, results: [faceLandmarks], overlay: _this2.state.overlay, displayResultsOptions: { drawLines: _this2.state.drawLines } });
	            }));
	        }), React.createElement(MarginTop_1.MarginTop, null, React.createElement(Mui.FormControlLabel, { control: React.createElement(Mui.Checkbox, { checked: this.state.drawLines, onChange: this.toggleDrawLines, color: "primary" }), label: "Draw Lines" })));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(58);
	exports.MarginTop = styled_components_1.default.div(_templateObject);

/***/ })

});
//# sourceMappingURL=component---src-pages-bbt-face-landmark-detection-tsx-6868e4f705c3cd8161d8.js.map