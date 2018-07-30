webpackJsonp([137470533303075],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 40px;\n  height: 40px;\n"], ["\n  width: 40px;\n  height: 40px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(42);
	var React = __webpack_require__(2);
	var styled_components_1 = __webpack_require__(32);
	var SideBySide_1 = __webpack_require__(95);
	exports.StyledButton = styled_components_1.default(core_1.Button)(_templateObject);
	exports.AdjustableInput = function (props) {
	    return React.createElement(core_1.FormControl, null, React.createElement(SideBySide_1.SideBySide, null, React.createElement(core_1.InputLabel, { htmlFor: props.inputId }, props.label), React.createElement(core_1.Input, { id: props.inputId, value: props.value }), React.createElement(exports.StyledButton, { variant: "outlined", onClick: function onClick() {
	            return props.onChange(Math.max(props.value - props.step, props.minValue));
	        } }, "-"), React.createElement(exports.StyledButton, { variant: "outlined", onClick: function onClick() {
	            return props.onChange(Math.min(props.value + props.step, props.maxValue));
	        } }, "+")));
	};

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(30);
	exports.DisplayFullFaceDescriptions = function (props) {
	    var overlay = props.overlay,
	        fullFaceDescriptions = props.fullFaceDescriptions;
	
	    if (!fullFaceDescriptions || !overlay) {
	        return null;
	    }
	    var width = overlay.width,
	        height = overlay.height;
	
	    overlay.getContext('2d').clearRect(0, 0, width, height);
	    var faceDetections = fullFaceDescriptions.map(function (fd) {
	        return fd.detection.forSize(width, height);
	    });
	    faceapi.drawDetection(overlay, faceDetections, { withScore: props.withScore });
	    if (props.drawLandmarks) {
	        faceapi.drawLandmarks(overlay, fullFaceDescriptions.map(function (fd) {
	            return fd.landmarks.forSize(width, height);
	        }), { color: 'red', drawLines: true, lineWidth: 4 });
	    }
	    fullFaceDescriptions.forEach(function (_ref) {
	        var detection = _ref.detection,
	            descriptor = _ref.descriptor;
	
	        var bestMatch = props.getBestMatch(descriptor);
	        var text = (bestMatch.distance < 0.6 ? bestMatch.label : 'unknown') + " (" + faceapi.round(bestMatch.distance) + ")";
	
	        var _detection$forSize$ge = detection.forSize(width, height).getBox(),
	            x = _detection$forSize$ge.x,
	            y = _detection$forSize$ge.y,
	            boxHeight = _detection$forSize$ge.height;
	
	        faceapi.drawText(overlay.getContext('2d'), x, y + boxHeight, text, _extends(faceapi.getDefaultDrawOptions(), { color: 'red', fontSize: 16 }));
	    });
	    return null;
	};

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(30);
	var withAllFaces_1 = __webpack_require__(173);
	exports.AllFacesMtcnn = withAllFaces_1.withAllFaces(function (img, detectionParams) {
	  return faceapi.allFacesMtcnn(img, detectionParams);
	});

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(30);
	var React = __webpack_require__(2);
	var ModalLoader_1 = __webpack_require__(171);
	
	var ComputeRefDescriptors = function (_React$Component) {
	    _inherits(ComputeRefDescriptors, _React$Component);
	
	    function ComputeRefDescriptors() {
	        _classCallCheck(this, ComputeRefDescriptors);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	        _this.state = {
	            refDescriptors: null,
	            isBusy: true
	        };
	        return _this;
	    }
	
	    ComputeRefDescriptors.prototype.initRefDescriptors = function () {
	        var _ref = _asyncToGenerator(function* () {
	            var _this2 = this;
	
	            var refDescriptors = yield Promise.all(this.props.refDataSources.map(function () {
	                var _ref2 = _asyncToGenerator(function* (_ref3) {
	                    var label = _ref3.label,
	                        url = _ref3.url;
	
	                    var img = yield faceapi.bufferToImage((yield (yield fetch(url)).blob()));
	                    var descriptor = yield _this2.props.faceRecognitionNet.computeFaceDescriptor(img);
	                    return {
	                        label: label.replace('1.png', ''),
	                        descriptor: descriptor
	                    };
	                });
	
	                return function (_x) {
	                    return _ref2.apply(this, arguments);
	                };
	            }()));
	            this.setState({
	                refDescriptors: refDescriptors,
	                isBusy: false
	            });
	        });
	
	        function initRefDescriptors() {
	            return _ref.apply(this, arguments);
	        }
	
	        return initRefDescriptors;
	    }();
	
	    ComputeRefDescriptors.prototype.componentDidMount = function componentDidMount() {
	        this.initRefDescriptors();
	    };
	
	    ComputeRefDescriptors.prototype.render = function render() {
	        var _this3 = this;
	
	        if (this.state.isBusy) {
	            return React.createElement(ModalLoader_1.ModalLoader, { title: "Computing Reference Descriptors" });
	        }
	        var getBestMatch = function getBestMatch(queryDescriptor) {
	            return _this3.state.refDescriptors.map(function (ref) {
	                return {
	                    label: ref.label,
	                    distance: faceapi.euclideanDistance(ref.descriptor, queryDescriptor)
	                };
	            }).reduce(function (best, curr) {
	                return curr.distance < best.distance ? curr : best;
	            });
	        };
	        return this.props.children(getBestMatch, this.state.refDescriptors);
	    };
	
	    return ComputeRefDescriptors;
	}(React.Component);
	
	exports.ComputeRefDescriptors = ComputeRefDescriptors;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	exports.withAllFaces = function (allFaces) {
	    return function (_React$Component) {
	        _inherits(_class, _React$Component);
	
	        function _class() {
	            _classCallCheck(this, _class);
	
	            var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	            _this.state = {
	                fullFaceDescriptions: null
	            };
	            return _this;
	        }
	
	        _class.prototype.detectFaces = function () {
	            var _ref = _asyncToGenerator(function* () {
	                if (!this.props.img.isLoaded) {
	                    return;
	                }
	                var fullFaceDescriptions = yield allFaces(this.props.img.img, this.props.detectionParams);
	                this.setState({
	                    fullFaceDescriptions: fullFaceDescriptions
	                });
	            });
	
	            function detectFaces() {
	                return _ref.apply(this, arguments);
	            }
	
	            return detectFaces;
	        }();
	
	        _class.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	            if (this.props.detectionParams !== prevProps.detectionParams || this.props.img !== prevProps.img || this.props.children !== prevProps.children) {
	                this.detectFaces();
	            }
	        };
	
	        _class.prototype.componentDidMount = function componentDidMount() {
	            this.detectFaces();
	        };
	
	        _class.prototype.render = function render() {
	            return this.props.children(this.state.fullFaceDescriptions);
	        };
	
	        return _class;
	    }(React.Component);
	};

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var gatsby_link_1 = __webpack_require__(54);
	var React = __webpack_require__(2);
	var AdjustableInput_1 = __webpack_require__(169);
	var DisplayFullFaceDescriptions_1 = __webpack_require__(170);
	var SelectableImage_1 = __webpack_require__(93);
	var const_1 = __webpack_require__(94);
	var AllFacesMtcnn_1 = __webpack_require__(635);
	var ComputeRefDescriptors_1 = __webpack_require__(172);
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
	            detectionParams: {
	                minFaceSize: 40
	            }
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
	            }, maxImageWidth: 800 }), React.createElement(AdjustableInput_1.AdjustableInput, { inputId: "minFaceSize", label: "minFaceSize:", value: this.state.detectionParams.minFaceSize, minValue: 20, maxValue: 200, step: 20, onChange: function onChange(minFaceSize) {
	                return _this2.setState({
	                    detectionParams: _extends({}, _this2.state.detectionParams, { minFaceSize: minFaceSize })
	                });
	            } }), React.createElement(LoadModels_1.LoadModels, { mtcnnModelUrl: gatsby_link_1.withPrefix('/models'), faceRecognitionModelUrl: gatsby_link_1.withPrefix('/models') }, function (_ref2) {
	            var faceRecognitionNet = _ref2.faceRecognitionNet;
	            return React.createElement(ComputeRefDescriptors_1.ComputeRefDescriptors, { faceRecognitionNet: faceRecognitionNet, refDataSources: const_1.ALIGNED_FACE_IMAGES_BY_CLASS.map(function (srcsByClass) {
	                    return srcsByClass[0];
	                }) }, function (getBestMatch) {
	                return React.createElement(AllFacesMtcnn_1.AllFacesMtcnn, { img: _this2.state.inputImg, detectionParams: _this2.state.detectionParams }, function (fullFaceDescriptions) {
	                    return React.createElement(DisplayFullFaceDescriptions_1.DisplayFullFaceDescriptions, { fullFaceDescriptions: fullFaceDescriptions, overlay: _this2.state.overlay, getBestMatch: getBestMatch, drawLandmarks: true });
	                });
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

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
//# sourceMappingURL=component---src-pages-face-recognition-mtcnn-tsx-e945791d6c9f920695bc.js.map