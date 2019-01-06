(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayResults", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWithOverlay", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(227);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayResults", function() { return _displayResults__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _facc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComputeFaceDescriptors", function() { return _facc__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadModels", function() { return _facc__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAsyncRendering", function() { return _hoc__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _MediaElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(315);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaElement", function() { return _MediaElement__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _shallowEquals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(241);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEquals", function() { return _shallowEquals__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(316);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);

var CenterContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "CenterContent",
  componentId: "sc-1fd82k2-0"
})(["display:flex;align-items:", ";justify-content:center;flex-direction:", ";flex-wrap:wrap;"], function (props) {
  return props.alignItems || 'center';
}, function (props) {
  return props.flexDirection || 'row';
});

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DOCS_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EXAMPLE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGNED_FACE_IMAGES_BY_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EXAMPLE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MODELS_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALIGNED_FACE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FACE_DETECTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isTinyFaceDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isSsdMobilenetv1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isMtcnn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFaceDetectionModelUri; });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_0__);

var DOCS_URI = Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])('/docs/globals.html');
var EXAMPLE_IMAGES = [1, 2, 3, 4, 5].map(function (idx) {
  return "bbt" + idx + ".jpg";
}).map(function (label) {
  return {
    label: label,
    url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/images/" + label)
  };
});
var ALIGNED_FACE_IMAGES_BY_CLASS = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart'].map(function (clazz) {
  return [1, 2, 3, 4, 5].map(function (idx) {
    return "" + clazz + idx + ".png";
  }).map(function (label) {
    return {
      label: label,
      url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/images/" + clazz + "/" + label)
    };
  });
});
var EXAMPLE_VIDEO = Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/media/bbt.mp4");
var MODELS_URI = Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/models");
var ALIGNED_FACE_IMAGES = ALIGNED_FACE_IMAGES_BY_CLASS.reduce(function (flat, arr) {
  return flat.concat(arr);
}, []);
var FACE_DETECTORS = ['Tiny Face Detector', 'SSD Mobilenet V1', 'MTCNN'];
function isTinyFaceDetector(detectorName) {
  return detectorName === FACE_DETECTORS[0];
}
function isSsdMobilenetv1(detectorName) {
  return detectorName === FACE_DETECTORS[1];
}
function isMtcnn(detectorName) {
  return detectorName === FACE_DETECTORS[2];
}
function getFaceDetectionModelUri(detectorName, modelUri) {
  if (isTinyFaceDetector(detectorName)) {
    return {
      tinyFaceDetectorModelUrl: modelUri
    };
  }

  if (isSsdMobilenetv1(detectorName)) {
    return {
      ssdMobilenetv1ModelUrl: modelUri
    };
  }

  if (isMtcnn(detectorName)) {
    return {
      mtcnnModelUrl: modelUri
    };
  }

  throw new Error("getLoadModelsUriFromFaceDetector - invalid face detector: " + detectorName);
}

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBySide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);

var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "SideBySide",
  componentId: "sc-1l438wy-0"
})(["display:flex;flex-direction:row;align-items:center;"]);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAsyncRendering; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shallowEquals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(241);








var withAsyncRendering = function withAsyncRendering(asyncAction, initialState) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(_class2, _React$Component);

      function _class2(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          injectedProps: initialState,
          isBusy: true
        };
        _this.dispatchAsyncAction = _this.dispatchAsyncAction.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
        return _this;
      }

      var _proto = _class2.prototype;

      _proto.dispatchAsyncAction =
      /*#__PURE__*/
      function () {
        var _dispatchAsyncAction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(props) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.setState({
                    isBusy: true
                  });
                  _context.t0 = this;
                  _context.next = 4;
                  return asyncAction(props);

                case 4:
                  _context.t1 = _context.sent;
                  _context.t2 = {
                    isBusy: false,
                    injectedProps: _context.t1
                  };

                  _context.t0.setState.call(_context.t0, _context.t2);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function dispatchAsyncAction(_x) {
          return _dispatchAsyncAction.apply(this, arguments);
        };
      }();

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!Object(_shallowEquals__WEBPACK_IMPORTED_MODULE_7__[/* shallowEquals */ "a"])(this.props, nextProps, ['children'])) {
          this.dispatchAsyncAction(nextProps);
        }
      };

      _proto.componentDidMount = function componentDidMount() {
        this.dispatchAsyncAction(this.props);
      };

      _proto.render = function render() {
        var _this$state = this.state,
            injectedProps = _this$state.injectedProps,
            isBusy = _this$state.isBusy;
        var renderBusyComponent = this.props.renderBusyComponent;

        if (isBusy) {
          return renderBusyComponent ? renderBusyComponent() : null;
        }

        return injectedProps ? this.props.children(Object.assign({}, injectedProps, {
          isBusy: isBusy
        })) // case: async action did not resolve state
        : null;
      };

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"])
  );
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/index.js
var styles = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(357);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(161);

// EXTERNAL MODULE: ./src/styled/CenterContent.tsx
var CenterContent = __webpack_require__(153);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(176);
var gatsby_link_default = /*#__PURE__*/__webpack_require__.n(gatsby_link);

// CONCATENATED MODULE: ./src/styled/StyledLink.tsx


var linkCss = Object(styled_components_browser_esm["a" /* css */])(["padding:4px;color:inherit;text-decoration:none;display:block;"]);
var StyledLink = Object(styled_components_browser_esm["b" /* default */])(gatsby_link_default.a).withConfig({
  displayName: "StyledLink",
  componentId: "sc-1oh8dwm-0"
})(["", ""], linkCss);
var StyledAbsLink = styled_components_browser_esm["b" /* default */].a.withConfig({
  displayName: "StyledLink__StyledAbsLink",
  componentId: "sc-1oh8dwm-1"
})(["", ""], linkCss);
// CONCATENATED MODULE: ./src/components/SideMenu.tsx








var SideMenu_styles = function styles(theme) {
  return {
    paper: {
      width: theme.sideMenuWidth
    }
  };
};

var SideMenu_SideMenuComponent =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SideMenuComponent, _React$Component);

  function SideMenuComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SideMenuComponent.prototype;

  _proto.renderDrawer = function renderDrawer(isSm) {
    var menu = react["createElement"]("div", null, isSm && react["createElement"](index_es["l" /* IconButton */], {
      "aria-label": "open drawer",
      onClick: this.props.onToggle
    }, react["createElement"](Menu_default.a, null)), react["createElement"](StyledAbsLink, {
      href: "https://github.com/justadudewhohacks/face-api.js"
    }, react["createElement"]("h3", {
      style: {
        paddingLeft: 24
      }
    }, " face-api.js ")), react["createElement"](index_es["f" /* Divider */], null), react["createElement"](StyledAbsLink, {
      href: src_const["c" /* DOCS_URI */]
    }, react["createElement"]("h3", {
      style: {
        paddingLeft: 24
      }
    }, " API Documentation ")), react["createElement"](index_es["f" /* Divider */], null), react["createElement"](index_es["p" /* List */], null, this.props.items.map(function (item) {
      return react["createElement"](index_es["q" /* ListItem */], {
        key: item.linkTo
      }, react["createElement"](StyledLink, {
        to: item.linkTo
      }, item.label));
    })));
    return react["createElement"](index_es["g" /* Drawer */], {
      anchor: "left",
      variant: isSm ? 'temporary' : 'permanent',
      open: this.props.isOpen,
      onClose: isSm ? this.props.onToggle : function () {},
      ModalProps: {
        keepMounted: true
      },
      classes: {
        paper: this.props.classes.paper
      }
    }, menu);
  };

  _proto.render = function render() {
    return react["createElement"]("div", null, react["createElement"](index_es["k" /* Hidden */], {
      mdUp: true
    }, this.renderDrawer(true)), react["createElement"](index_es["k" /* Hidden */], {
      smDown: true
    }, this.renderDrawer(false)));
  };

  return SideMenuComponent;
}(react["Component"]);

var SideMenu = Object(styles["withStyles"])(SideMenu_styles)(SideMenu_SideMenuComponent);
// CONCATENATED MODULE: ./src/layouts/PageLayout.tsx








var PageHeader = styled_components_browser_esm["b" /* default */].h3.withConfig({
  displayName: "PageLayout__PageHeader",
  componentId: "btidp4-0"
})(["text-align:center;"]);
var MENU_ITEMS = [{
  label: 'Face And Landmark Detection',
  linkTo: '/face_and_landmark_detection'
}, {
  label: 'Face Recognition',
  linkTo: '/face_recognition'
}, {
  label: 'Video Face Tracking',
  linkTo: '/video_face_tracking'
}, {
  label: 'Webcam Face Tracking',
  linkTo: '/webcam_face_tracking'
}, {
  label: 'Webcam Face Expression Recognition',
  linkTo: '/webcam_face_expression_recognition'
}, {
  label: 'BBT Face Landmark Detection',
  linkTo: '/bbt_face_landmark_detection'
}, {
  label: 'BBT Face Similarity',
  linkTo: '/bbt_face_similarity'
}, {
  label: 'BBT Face Recognition',
  linkTo: '/bbt_face_recognition'
}];

var PageLayout_styles = function styles(theme) {
  var _pageContent;

  return {
    pageContent: (_pageContent = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      maxWidth: '800px',
      padding: '10px',
      marginLeft: '0px'
    }, _pageContent[theme.breakpoints.up('md')] = {
      marginLeft: theme.sideMenuWidth
    }, _pageContent)
  };
};

var PageLayout_PageLayoutComponent =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PageLayoutComponent, _React$Component);

  function PageLayoutComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      isSideMenuOpen: false
    };

    _this.toggleMenu = function () {
      _this.setState(function (state) {
        return {
          isSideMenuOpen: !state.isSideMenuOpen
        };
      });
    };

    return _this;
  }

  var _proto = PageLayoutComponent.prototype;

  _proto.render = function render() {
    return react["createElement"]("div", null, react["createElement"](index_es["l" /* IconButton */], {
      "aria-label": "open drawer",
      onClick: this.toggleMenu,
      style: {
        zIndex: 999
      }
    }, react["createElement"](Menu_default.a, null)), react["createElement"](SideMenu, {
      items: MENU_ITEMS,
      isOpen: this.state.isSideMenuOpen,
      onToggle: this.toggleMenu
    }), react["createElement"]("div", {
      className: this.props.classes.pageContent
    }, react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"]("div", null, react["createElement"](PageHeader, null, "face-api.js playground"), this.props.children))));
  };

  return PageLayoutComponent;
}(react["Component"]);

var PageLayout = Object(styles["withStyles"])(PageLayout_styles)(PageLayout_PageLayoutComponent);
// CONCATENATED MODULE: ./src/Root.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root_Root; });





var getPageContext = __webpack_require__(658).default;

var Root_Root =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Root, _React$Component);

  function Root(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.pageContext = {};
    _this.pageContext = getPageContext();
    return _this;
  }

  var _proto = Root.prototype;

  _proto.render = function render() {
    return react["createElement"](styles["MuiThemeProvider"], {
      theme: this.pageContext.theme,
      sheetsManager: this.pageContext.sheetsManager
    }, react["createElement"](PageLayout, null, this.props.children));
  };

  return Root;
}(react["Component"]);

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayResults; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(227);




var DisplayResults =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(DisplayResults, _React$Component);

  function DisplayResults() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DisplayResults.prototype;

  _proto.displayResults = function displayResults(_ref) {
    var input = _ref.input,
        overlay = _ref.overlay,
        results = _ref.results,
        displayResultsOptions = _ref.displayResultsOptions;

    Object(_displayResults__WEBPACK_IMPORTED_MODULE_3__[/* displayResults */ "a"])(input, overlay, results, displayResultsOptions);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!Object(face_api_js_react__WEBPACK_IMPORTED_MODULE_1__["shallowEquals"])(this.props, nextProps, ['children'])) {
      this.displayResults(nextProps);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.displayResults(this.props);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? children() : null;
  };

  return DisplayResults;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
DisplayResults.defaultProps = {
  displayResultsOptions: {
    withScore: true,
    drawLines: true
  }
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayResults; });
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);


function displayResults(input, overlay, results, options) {
  if (!input || !overlay) {
    return;
  }

  overlay.getContext('2d').clearRect(0, 0, overlay.width, overlay.height);

  var _input$element$getBou = input.element.getBoundingClientRect(),
      width = _input$element$getBou.width,
      height = _input$element$getBou.height;

  overlay.width = width;
  overlay.height = height;
  var _options$withBoxes = options.withBoxes,
      withBoxes = _options$withBoxes === void 0 ? true : _options$withBoxes,
      _options$withScore = options.withScore,
      withScore = _options$withScore === void 0 ? true : _options$withScore,
      _options$drawLines = options.drawLines,
      drawLines = _options$drawLines === void 0 ? true : _options$drawLines;

  if (!results || !results.length) {
    return;
  }

  var resizedResults = results.map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"] ? res : Object(face_api_js__WEBPACK_IMPORTED_MODULE_0__["resizeResults"])(res, overlay);
  });
  var detections = resizedResults.filter(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["ObjectDetection"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"] || res.detection;
  }).map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["ObjectDetection"] ? res : res.detection;
  });
  var drawDetectionsOptions = {
    withScore: withScore,
    textColor: 'red',
    fontSize: 16
  };
  var faceLandmarks = resizedResults.filter(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceLandmarks68"] || res.landmarks;
  }).map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceLandmarks68"] ? res : res.landmarks;
  });
  var faceExpressions = resizedResults.filter(function (res) {
    return res.detection && res.expressions;
  }).map(function (_ref) {
    var detection = _ref.detection,
        expressions = _ref.expressions;
    return {
      position: detection.box,
      expressions: expressions
    };
  });
  var drawLandmarksOptions = {
    drawLines: drawLines,
    color: 'green',
    lineWidth: 2
  };

  if (withBoxes) {
    face_api_js__WEBPACK_IMPORTED_MODULE_0__["drawDetection"](overlay, detections, drawDetectionsOptions);
  }

  face_api_js__WEBPACK_IMPORTED_MODULE_0__["drawLandmarks"](overlay, faceLandmarks, drawLandmarksOptions);
  face_api_js__WEBPACK_IMPORTED_MODULE_0__["drawFaceExpressions"](overlay, faceExpressions);
}

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shallowEquals; });
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(519);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(521);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__);






function shallowEquals(obj1, obj2, excludeKeys) {
  if (excludeKeys === void 0) {
    excludeKeys = [];
  }

  var excludeKeysSet = new Set(excludeKeys);
  var keysSet = new Set(Object.keys(obj1).concat(Object.keys(obj2)).filter(function (key) {
    return !excludeKeysSet.has(key);
  }));
  return Array.from(keysSet.values()).filter(function (key) {
    return obj1[key] !== obj2[key];
  }).length === 0;
}

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectFaceLandmarks; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(142);
/* harmony import */ var _hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(175);






function detectFaceLandmarks(_x) {
  return _detectFaceLandmarks.apply(this, arguments);
}

function _detectFaceLandmarks() {
  _detectFaceLandmarks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var faceLandmarks;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (props.input) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return face_api_js__WEBPACK_IMPORTED_MODULE_3__["nets"].faceLandmark68Net.detectLandmarks(props.input.element);

          case 4:
            faceLandmarks = _context.sent;
            return _context.abrupt("return", {
              faceLandmarks: faceLandmarks
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _detectFaceLandmarks.apply(this, arguments);
}

var DetectFaceLandmarks = Object(_hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__[/* withAsyncRendering */ "a"])(detectFaceLandmarks);

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectFaces; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(142);
/* harmony import */ var _hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(175);






function detectFaces(_x) {
  return _detectFaces.apply(this, arguments);
}

function _detectFaces() {
  _detectFaces = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (props.input) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            _context.next = 4;
            return face_api_js__WEBPACK_IMPORTED_MODULE_3__["detectAllFaces"](props.input.element, props.detectionOptions);

          case 4:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              faceDetections: _context.t0
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _detectFaces.apply(this, arguments);
}

var DetectFaces = Object(_hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__[/* withAsyncRendering */ "a"])(detectFaces);

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _withAsyncRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _withAsyncRendering__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaElement; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);

var MediaElement =
/*#__PURE__*/
function () {
  function MediaElement(element) {
    this._element = element;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(MediaElement, [{
    key: "element",
    get: function get() {
      return this._element;
    }
  }]);

  return MediaElement;
}();

/***/ }),

/***/ 316:
/***/ (function(module, exports) {



/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(653));
} else {}

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(159);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(160);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 166 modules
var es6 = __webpack_require__(142);

// EXTERNAL MODULE: ./face-api.js-react/hoc/withAsyncRendering.tsx
var withAsyncRendering = __webpack_require__(175);

// CONCATENATED MODULE: ./face-api.js-react/facc/ComputeFaceDescriptors.tsx










function computeFaceDescriptors(_x) {
  return _computeFaceDescriptors.apply(this, arguments);
}

function _computeFaceDescriptors() {
  _computeFaceDescriptors = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(props) {
    var faceDescriptors;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (props.inputs.every(function (input) {
              return !!input;
            })) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return Promise.all(props.inputs.map(function (input) {
              return es6["nets"].faceRecognitionNet.computeFaceDescriptor(input.element);
            }));

          case 4:
            faceDescriptors = _context.sent;
            return _context.abrupt("return", {
              faceDescriptors: faceDescriptors
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _computeFaceDescriptors.apply(this, arguments);
}

var ComputeFaceDescriptors = Object(withAsyncRendering["a" /* withAsyncRendering */])(computeFaceDescriptors);
// EXTERNAL MODULE: ./face-api.js-react/facc/DetectFaceLandmarks.tsx
var DetectFaceLandmarks = __webpack_require__(243);

// EXTERNAL MODULE: ./face-api.js-react/facc/DetectFaces.tsx
var DetectFaces = __webpack_require__(244);

// CONCATENATED MODULE: ./face-api.js-react/facc/LoadModels.tsx










function loadModels(_x) {
  return _loadModels.apply(this, arguments);
}

function _loadModels() {
  _loadModels = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(props) {
    var ssdMobilenetv1ModelUrl, mtcnnModelUrl, tinyFaceDetectorModelUrl, faceLandmarkModelUrl, faceRecognitionModelUrl, faceExpessionModelUrl, load;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ssdMobilenetv1ModelUrl = props.ssdMobilenetv1ModelUrl, mtcnnModelUrl = props.mtcnnModelUrl, tinyFaceDetectorModelUrl = props.tinyFaceDetectorModelUrl, faceLandmarkModelUrl = props.faceLandmarkModelUrl, faceRecognitionModelUrl = props.faceRecognitionModelUrl, faceExpessionModelUrl = props.faceExpessionModelUrl;

            load =
            /*#__PURE__*/
            function () {
              var _ref = asyncToGenerator_default()(
              /*#__PURE__*/
              regenerator_default.a.mark(function _callee(net, url) {
                return regenerator_default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(url && !net.isLoaded)) {
                          _context.next = 3;
                          break;
                        }

                        _context.next = 3;
                        return net.load(url);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function load(_x2, _x3) {
                return _ref.apply(this, arguments);
              };
            }();

            _context2.next = 4;
            return Promise.all([load(es6["nets"].tinyFaceDetector, tinyFaceDetectorModelUrl), load(es6["nets"].ssdMobilenetv1, ssdMobilenetv1ModelUrl), load(es6["nets"].mtcnn, mtcnnModelUrl), load(es6["nets"].faceLandmark68Net, faceLandmarkModelUrl), load(es6["nets"].faceRecognitionNet, faceRecognitionModelUrl), load(es6["nets"].faceExpressionNet, faceExpessionModelUrl)]);

          case 4:
            return _context2.abrupt("return", {});

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _loadModels.apply(this, arguments);
}

var LoadModels = Object(withAsyncRendering["a" /* withAsyncRendering */])(loadModels);
// CONCATENATED MODULE: ./face-api.js-react/facc/index.ts
/* concated harmony reexport ComputeFaceDescriptors */__webpack_require__.d(__webpack_exports__, "a", function() { return ComputeFaceDescriptors; });
/* unused concated harmony import DetectFaceLandmarks */
/* unused concated harmony import DetectFaces */
/* concated harmony reexport LoadModels */__webpack_require__.d(__webpack_exports__, "b", function() { return LoadModels; });





/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./face-api.js-react/components/DisplayResults.tsx
var DisplayResults = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(48);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(149);

// CONCATENATED MODULE: ./face-api.js-react/components/ImageWithOverlay.tsx





var ImageWithOverlay_ImageWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(ImageWithOverlay, _React$Component);

  function ImageWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onImageLoaded = _this.onImageLoaded.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    _this.onImageRef = _this.onImageRef.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    _this.onCanvasRef = _this.onCanvasRef.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    return _this;
  }

  var _proto = ImageWithOverlay.prototype;

  _proto.onChange = function onChange() {
    var img = this.img,
        overlay = this.overlay,
        isLoaded = this.isLoaded;

    if (img && overlay && isLoaded) {
      this.overlay.height = this.img.height;
      this.overlay.width = this.img.width;
      this.props.onLoaded({
        img: new face_api_js_react["MediaElement"](img),
        overlay: overlay
      });
    }
  };

  _proto.onImageLoaded = function onImageLoaded() {
    this.isLoaded = true;
    this.onChange();
  };

  _proto.onImageRef = function onImageRef(el) {
    this.img = el;
    this.onChange();
  };

  _proto.onCanvasRef = function onCanvasRef(el) {
    this.overlay = el;
    this.onChange();
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.imageSrc !== this.props.imageSrc;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onChange();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onChange();
  };

  _proto.render = function render() {
    return react["createElement"]("div", {
      style: Object.assign({}, {
        position: 'relative'
      }, this.props.containerStyle)
    }, react["createElement"]("img", {
      src: this.props.imageSrc,
      ref: this.onImageRef,
      style: Object.assign({
        width: '100%'
      }, this.props.imageStyle),
      onLoad: this.onImageLoaded
    }), react["createElement"]("canvas", {
      style: Object.assign({}, {
        position: 'absolute',
        top: 0,
        left: 0
      }, this.props.canvasStyle),
      ref: this.onCanvasRef
    }));
  };

  return ImageWithOverlay;
}(react["Component"]);
// CONCATENATED MODULE: ./face-api.js-react/components/index.ts
/* concated harmony reexport DisplayResults */__webpack_require__.d(__webpack_exports__, "a", function() { return DisplayResults["a" /* DisplayResults */]; });
/* concated harmony reexport ImageWithOverlay */__webpack_require__.d(__webpack_exports__, "b", function() { return ImageWithOverlay_ImageWithOverlay; });



/***/ }),

/***/ 433:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(176);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPageContext; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(659);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(245);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(171);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(660);
/* harmony import */ var _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6__);






 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: {
      light: _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6___default.a[300],
      main: _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6___default.a[500],
      dark: _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6___default.a[700]
    }
  },
  sideMenuWidth: '240px'
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_4__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(167), __webpack_require__(162)))

/***/ })

}]);
//# sourceMappingURL=1-7702ca8104c8b3f24c3e.js.map