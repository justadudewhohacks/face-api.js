(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ../face-api.js/build/es6/index.js + 97 modules
var es6 = __webpack_require__(143);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(142);

// CONCATENATED MODULE: ./src/components/FaceSimilarity.tsx


var FaceSimilarity_FaceSimilarity = function FaceSimilarity(props) {
  return react["createElement"](index_es["h" /* FormControl */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: "distance"
  }, "Distance:"), react["createElement"](index_es["m" /* Input */], {
    id: "distance",
    value: props.text,
    style: {
      backgroundColor: props.isMatch ? '#b2ff59' : '#ea605d'
    }
  }));
};
// EXTERNAL MODULE: ./src/components/ModalLoader.tsx
var ModalLoader = __webpack_require__(172);

// EXTERNAL MODULE: ./src/components/SelectableImage.tsx + 1 modules
var SelectableImage = __webpack_require__(179);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(159);

// EXTERNAL MODULE: ./src/Root.tsx + 3 modules
var Root = __webpack_require__(184);

// EXTERNAL MODULE: ./src/styled/MarginTop.tsx
var MarginTop = __webpack_require__(270);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(167);

// CONCATENATED MODULE: ./src/pages/bbt_face_similarity.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bbt_face_similarity_default; });












var bbt_face_similarity_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this2 = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react["createElement"](Root["a" /* Root */], null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["a" /* ALIGNED_FACE_IMAGES */],
      initialImageSrc: src_const["a" /* ALIGNED_FACE_IMAGES */][30].url,
      onLoaded: function onLoaded(_ref) {
        var inputImg1 = _ref.img;
        return _this2.setState({
          inputImg1: inputImg1
        });
      },
      imageStyle: {
        maxWidth: 150
      },
      imgId: "img1"
    }), react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["a" /* ALIGNED_FACE_IMAGES */],
      initialImageSrc: src_const["a" /* ALIGNED_FACE_IMAGES */][31].url,
      onLoaded: function onLoaded(_ref2) {
        var inputImg2 = _ref2.img;
        return _this2.setState({
          inputImg2: inputImg2
        });
      },
      imageStyle: {
        maxWidth: 150
      },
      imgId: "img2"
    })), react["createElement"](MarginTop["a" /* MarginTop */], null, react["createElement"](face_api_js_react["LoadModels"], {
      faceRecognitionModelUrl: src_const["g" /* MODELS_URI */],
      renderBusyComponent: function renderBusyComponent() {
        return react["createElement"](ModalLoader["a" /* ModalLoader */], {
          title: "Loading Face Recognition Model"
        });
      }
    }, function () {
      return react["createElement"](face_api_js_react["ComputeFaceDescriptors"], {
        inputs: [_this2.state.inputImg1, _this2.state.inputImg2],
        renderBusyComponent: function renderBusyComponent() {
          return react["createElement"](ModalLoader["a" /* ModalLoader */], {
            title: "Computing Face Descriptors"
          });
        }
      }, function (_ref3) {
        var faceDescriptors = _ref3.faceDescriptors;

        if (!faceDescriptors) {
          return null;
        }

        var distance = es6["euclideanDistance"](faceDescriptors[0], faceDescriptors[1]);
        return react["createElement"](FaceSimilarity_FaceSimilarity, {
          text: "" + es6["round"](distance),
          isMatch: distance < 0.6
        });
      });
    })));
  };

  return _default;
}(react["Component"]);



/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(10);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(169);
var anObject = __webpack_require__(10);
var $flags = __webpack_require__(156);
var DESCRIPTORS = __webpack_require__(15);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(21)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(15) && /./g.flags != 'g') __webpack_require__(22).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(156)
});


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoader; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ModalLoader = function ModalLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Dialog */ "c"], {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: true
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogTitle */ "e"], null, props.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogContent */ "d"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* LinearProgress */ "o"], null)));
};

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(49);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(158);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(152);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(168);

// CONCATENATED MODULE: ./src/components/ImageSelection.tsx



var ImageSelection_ImageSelection = function ImageSelection(_ref) {
  var items = _ref.items,
      selectedImage = _ref.selectedImage,
      onChange = _ref.onChange;
  return react["createElement"](index_es["h" /* FormControl */], null, react["createElement"](index_es["s" /* Select */], {
    value: selectedImage,
    onChange: function (_onChange) {
      function onChange(_x) {
        return _onChange.apply(this, arguments);
      }

      onChange.toString = function () {
        return _onChange.toString();
      };

      return onChange;
    }(function (e) {
      return onChange(e.target.value);
    }),
    input: react["createElement"](index_es["m" /* Input */], null)
  }, items.map(function (item) {
    return react["createElement"](index_es["r" /* MenuItem */], {
      key: item.url,
      value: item.url
    }, item.label);
  })), react["createElement"](index_es["j" /* FormHelperText */], null, "Pick an image"));
};
// CONCATENATED MODULE: ./src/components/SelectableImage.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectableImage_SelectableImage; });









var Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableImage__Container",
  componentId: "sc-1k2zozl-0"
})(["padding:10px;display:flex;flex-direction:column;align-items:center;"]);
var Margin = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableImage__Margin",
  componentId: "sc-1k2zozl-1"
})(["margin:10px;"]);
var SelectionTypes;

(function (SelectionTypes) {
  SelectionTypes["SELECT"] = "SELECT";
  SelectionTypes["FILE"] = "FILE";
  SelectionTypes["BOTH"] = "BOTH";
})(SelectionTypes || (SelectionTypes = {}));

var SelectableImage_SelectableImage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectableImage, _React$Component);

  function SelectableImage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      imageSrc: props.initialImageSrc
    };
    _this.onChangeSelection = _this.onChangeSelection.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    _this.onLoadFromDisk = _this.onLoadFromDisk.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    return _this;
  }

  var _proto = SelectableImage.prototype;

  _proto.onChangeSelection = function onChangeSelection(imageSrc) {
    this.setState({
      imageSrc: imageSrc
    });
  };

  _proto.onLoadFromDisk = function onLoadFromDisk(e) {
    var _this2 = this;

    var file = (e.target.files || [])[0];

    if (!file) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      return _this2.setState({
        imageSrc: loadEvent.target.result
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  _proto.render = function render() {
    var selectionType = this.props.selectionType;
    return react["createElement"](Container, null, react["createElement"](face_api_js_react["ImageWithOverlay"], Object.assign({}, this.props, {
      imageSrc: this.state.imageSrc,
      imageStyle: this.props.imageStyle
    })), react["createElement"](SideBySide["a" /* SideBySide */], null, (selectionType === SelectionTypes.SELECT || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"](ImageSelection_ImageSelection, {
      items: this.props.items,
      selectedImage: this.state.imageSrc,
      onChange: this.onChangeSelection
    })), (selectionType === SelectionTypes.FILE || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"]("input", {
      accept: "image/*",
      id: this.props.imgId,
      multiple: true,
      style: {
        display: 'none'
      },
      onChange: this.onLoadFromDisk,
      type: "file"
    }), react["createElement"]("label", {
      htmlFor: this.props.imgId
    }, react["createElement"](index_es["a" /* Button */], {
      variant: "outlined",
      component: "span"
    }, "From Disk")))));
  };

  return SelectableImage;
}(react["Component"]);
SelectableImage_SelectableImage.defaultProps = {
  selectionType: SelectionTypes.SELECT
};

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarginTop; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);

var MarginTop = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "MarginTop",
  componentId: "sc-9ry3hz-0"
})(["margin-top:10px;"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-bbt-face-similarity-tsx-6b5b9027a17025e2dc9d.js.map