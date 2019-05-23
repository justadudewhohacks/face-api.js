(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__(5891);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(205);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(207);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(5892);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/index.es.js
var icons_index_es = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 176 modules
var es6 = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/index.js
var styles = __webpack_require__(168);

// CONCATENATED MODULE: ./src/components/FacePreview.tsx







var NameInput = styles["withStyles"]({
  className: {
    width: 120,
    textAlign: 'center'
  }
})(function (props) {
  return react["createElement"](index_es["n" /* Input */], {
    value: props.value,
    onChange: props.onChange,
    className: props.classes.className,
    placeholder: "Give me a name!"
  });
});
var Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "FacePreview__Container",
  componentId: "v0exp-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var FaceContainer = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "FacePreview__FaceContainer",
  componentId: "v0exp-1"
})(["position:relative;width:120px;height:100px;display:flex;align-items:center;justify-content:center;margin:4px;"]);
var Canvas = styled_components_browser_esm["b" /* default */].canvas.withConfig({
  displayName: "FacePreview__Canvas",
  componentId: "v0exp-2"
})(["max-width:120px;max-height:100px;"]);
var RemoveIcon = Object(styled_components_browser_esm["b" /* default */])(icons_index_es["b" /* DeleteOutlined */]).withConfig({
  displayName: "FacePreview__RemoveIcon",
  componentId: "v0exp-3"
})(["position:absolute;top:0;background:rgba(0,0,0,0.5);color:rgb(255,50,50);width:100% !important;height:100% !important;cursor:pointer;"]);
var FacePreview_FacePreview =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(FacePreview, _React$Component);

  function FacePreview() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      isHovered: false
    };

    _this.onRef = function (ref) {
      _this.ref = ref;

      _this.updateCanvas();
    };

    _this.updateCanvas = function () {
      if (_this.ref && _this.props.face) {
        es6["m" /* matchDimensions */](_this.ref, _this.props.face);
        es6["j" /* getContext2dOrThrow */](_this.ref).drawImage(_this.props.face, 0, 0);
      }
    };

    _this.onMouseEnter = function () {
      _this.setState({
        isHovered: true
      });
    };

    _this.onMouseLeave = function () {
      _this.setState({
        isHovered: false
      });
    };

    return _this;
  }

  var _proto = FacePreview.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.updateCanvas();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.updateCanvas();
  };

  _proto.render = function render() {
    var _this2 = this;

    return react["createElement"](Container, null, react["createElement"](FaceContainer, {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }, react["createElement"](Canvas, {
      ref: this.onRef
    }), this.state.isHovered ? react["createElement"](RemoveIcon, {
      onClick: this.props.onRemove
    }) : null), react["createElement"](NameInput, {
      value: this.props.name,
      onChange: function onChange(e) {
        return _this2.props.onNameChanged(e.target.value);
      }
    }));
  };

  return FacePreview;
}(react["Component"]);
// EXTERNAL MODULE: ./src/components/InputTypeTabs.tsx
var InputTypeTabs = __webpack_require__(268);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(204);

// EXTERNAL MODULE: ./src/container/BasePage.tsx + 22 modules
var BasePage = __webpack_require__(362);

// CONCATENATED MODULE: ./src/pages/face_recognition.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceWithDescriptors", function() { return FaceWithDescriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return face_recognition_default; });























var face_recognition_Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "face_recognition__Container",
  componentId: "pslp3k-0"
})(["max-width:100%;width:100%;margin:12px 0;"]);
var FacesContainer = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "face_recognition__FacesContainer",
  componentId: "pslp3k-1"
})(["height:160px;max-width:100%;width:100%;padding:8px 0;display:flex;overflow-x:scroll;"]);
var FaceWithDescriptors =
/*#__PURE__*/
function () {
  function FaceWithDescriptors(face, descriptor, id, name) {
    if (name === void 0) {
      name = '';
    }

    this.face = face;
    this.descriptor = descriptor;
    this.id = id;
    this.name = name;
  }

  var _proto = FaceWithDescriptors.prototype;

  _proto.copyWithName = function copyWithName(name) {
    return new FaceWithDescriptors(this.face, this.descriptor, this.id, name);
  };

  return FaceWithDescriptors;
}();

var face_recognition_ChildPage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(ChildPage, _React$Component);

  function ChildPage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto2 = ChildPage.prototype;

  _proto2.render = function render() {
    var _this = this;

    return react["createElement"](face_recognition_Container, null, react["createElement"](FacesContainer, null, this.props.facesWithDescriptors.sort(function (f0, f1) {
      return f0.name.localeCompare(f1.name);
    }).map(function (_ref) {
      var face = _ref.face,
          name = _ref.name,
          id = _ref.id;
      return react["createElement"](FacePreview_FacePreview, {
        key: id,
        face: face,
        name: name,
        onNameChanged: function onNameChanged(newName) {
          return _this.props.onChangeFaceWithDescriptorName(id, newName);
        },
        onRemove: function onRemove() {
          return _this.props.onRemoveFaceWithDescriptor(id);
        }
      });
    })));
  };

  return ChildPage;
}(react["Component"]);

var face_recognition_default =
/*#__PURE__*/
function (_React$Component2) {
  inheritsLoose_default()(_default, _React$Component2);

  function _default() {
    var _this2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
    _this2.state = {
      facesWithDescriptors: []
    };
    _this2.cachedResults = [];

    _this2.displayResults = function (element, overlay, facesWithDescriptors) {
      var labeledFacesWithDescriptors = facesWithDescriptors.filter(function (f) {
        return !!f.name;
      });
      var labeledDescriptors = labeledFacesWithDescriptors.map(function (f0) {
        return new es6["b" /* LabeledFaceDescriptors */](f0.name, labeledFacesWithDescriptors.filter(function (f1) {
          return f0.name === f1.name;
        }).map(function (f1) {
          return f1.descriptor;
        }));
      });
      var dimensions = es6["m" /* matchDimensions */](overlay, overlay, element instanceof HTMLVideoElement);
      var resizedResults = es6["o" /* resizeResults */](_this2.cachedResults, dimensions);

      if (!labeledDescriptors.length) {
        es6["h" /* draw */].drawDetections(overlay, resizedResults);
        return;
      }

      var faceMatcher = new es6["a" /* FaceMatcher */](labeledDescriptors);
      resizedResults.forEach(function (res) {
        return new es6["h" /* draw */].DrawBox(res.alignedRect.box, {
          label: faceMatcher.findBestMatch(res.descriptor).toString()
        }).draw(overlay);
      });
    };

    _this2.runFaceRecognition =
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(state, facesWithDescriptors) {
        var mediaElement, overlay, isFaceDetectorLoaded, areModelsLoaded, faceDetectionOptions, element;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mediaElement = state.mediaElement, overlay = state.overlay, isFaceDetectorLoaded = state.isFaceDetectorLoaded, areModelsLoaded = state.areModelsLoaded, faceDetectionOptions = state.faceDetectionOptions;

                if (!(!mediaElement || !overlay || !isFaceDetectorLoaded || !areModelsLoaded)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                element = mediaElement.element;
                _context.next = 6;
                return es6["g" /* detectAllFaces */](element, faceDetectionOptions).withFaceLandmarks().withFaceDescriptors();

              case 6:
                _this2.cachedResults = _context.sent;

                _this2.displayResults(element, overlay, facesWithDescriptors);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this2.onFaceWithDescriptorsChanged = function (state, facesWithDescriptors) {
      _this2.setState({
        facesWithDescriptors: facesWithDescriptors
      });

      if (state.inputType === InputTypeTabs["a" /* InputType */].IMAGE) {
        _this2.runFaceRecognition(state, facesWithDescriptors);
      }
    };

    _this2.onChangeFaceWithDescriptorName = function (state, id, newName) {
      var facesWithDescriptors = _this2.state.facesWithDescriptors;
      var idx = facesWithDescriptors.findIndex(function (f) {
        return f.id === id;
      });
      var newFaceWithDescriptors = [].concat(facesWithDescriptors.slice(0, idx), [facesWithDescriptors[idx].copyWithName(newName)], facesWithDescriptors.slice(idx + 1));

      _this2.onFaceWithDescriptorsChanged(state, newFaceWithDescriptors);
    };

    _this2.onRemoveFaceWithDescriptor = function (state, id) {
      var facesWithDescriptors = _this2.state.facesWithDescriptors;
      var idx = facesWithDescriptors.findIndex(function (f) {
        return f.id === id;
      });
      var newFaceWithDescriptors = [].concat(facesWithDescriptors.slice(0, idx), facesWithDescriptors.slice(idx + 1));

      _this2.onFaceWithDescriptorsChanged(state, newFaceWithDescriptors);
    };

    _this2.onUploadReferenceImage =
    /*#__PURE__*/
    function () {
      var _ref4 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(state, _ref3) {
        var target, file, img, results, faces, newFaceWithDescriptors;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                target = _ref3.target;
                file = target.files[0];
                _context2.next = 4;
                return es6["f" /* bufferToImage */](file);

              case 4:
                img = _context2.sent;
                _context2.next = 7;
                return es6["g" /* detectAllFaces */](img, state.faceDetectionOptions).withFaceLandmarks().withFaceDescriptors();

              case 7:
                results = _context2.sent;
                _context2.next = 10;
                return es6["i" /* extractFaces */](img, results.map(function (res) {
                  return res.alignedRect;
                }));

              case 10:
                faces = _context2.sent;
                newFaceWithDescriptors = faces.map(function (face, i) {
                  return new FaceWithDescriptors(face, results[i].descriptor, Date.now() + "_" + i);
                });

                _this2.onFaceWithDescriptorsChanged(state, [].concat(_this2.state.facesWithDescriptors, newFaceWithDescriptors));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this2.loadModels =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.all([es6["n" /* nets */].faceRecognitionNet.loadFromUri(src_const["e" /* MODELS_URI */])]);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    _this2.processInputs =
    /*#__PURE__*/
    function () {
      var _ref6 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(state) {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this2.runFaceRecognition(state, _this2.state.facesWithDescriptors);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();

    return _this2;
  }

  var _proto3 = _default.prototype;

  _proto3.render = function render() {
    var _this3 = this;

    return react["createElement"](BasePage["a" /* BasePage */], {
      loadAdditionalModels: this.loadModels,
      processInputs: this.processInputs,
      renderControls: function renderControls(state) {
        return react["createElement"](index_es["b" /* Button */], {
          variant: "contained",
          color: "primary",
          component: "label",
          style: {
            marginLeft: 10
          }
        }, react["createElement"]("input", {
          type: "file",
          hidden: true,
          onChange: function onChange(e) {
            return _this3.onUploadReferenceImage(state, e);
          }
        }), "Upload Reference Image", react["createElement"](icons_index_es["a" /* Add */], null));
      },
      renderChildren: function renderChildren(state) {
        return react["createElement"](face_recognition_ChildPage, Object.assign({}, state, _this3.state, {
          onChangeFaceWithDescriptorName: function onChangeFaceWithDescriptorName(id, name) {
            return _this3.onChangeFaceWithDescriptorName(state, id, name);
          },
          onRemoveFaceWithDescriptor: function onRemoveFaceWithDescriptor(id) {
            return _this3.onRemoveFaceWithDescriptor(state, id);
          }
        }));
      }
    });
  };

  return _default;
}(react["Component"]);



/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(18) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 5891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(12);
var $find = __webpack_require__(85)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(43)(KEY);


/***/ }),

/***/ 5892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(12);
var aFunction = __webpack_require__(27);
var toObject = __webpack_require__(28);
var fails = __webpack_require__(19);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(5893)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ 5893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(19);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ })

}]);
//# sourceMappingURL=component---src-pages-face-recognition-tsx-4762e0f7b438862f9257.js.map