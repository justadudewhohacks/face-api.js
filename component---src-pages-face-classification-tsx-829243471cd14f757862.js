(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(205);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(207);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 176 modules
var es6 = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(162);

// EXTERNAL MODULE: ./src/components/styled/SideBySide.tsx
var SideBySide = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(170);

// CONCATENATED MODULE: ./src/components/FaceClassificationToggleControls.tsx







var FaceClassificationToggleControls_Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      isActive = _ref.isActive,
      onChange = _ref.onChange;
  return react["createElement"](index_es["j" /* FormControlLabel */], {
    control: react["createElement"](index_es["c" /* Checkbox */], {
      checked: isActive,
      onChange: onChange,
      color: "primary"
    }),
    label: label
  });
};

var Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "FaceClassificationToggleControls__Container",
  componentId: "sc-134645k-0"
})(["margin:10px;"]);
function FaceClassificationToggleControls(_ref2) {
  var onChange = _ref2.onChange;

  var _useState = Object(react["useState"])(false),
      withFaceLandmarks = _useState[0],
      setWithFaceLandmarks = _useState[1];

  var _useState2 = Object(react["useState"])(false),
      withFaceExpressions = _useState2[0],
      setWithFaceExpressions = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      withAgeAndGender = _useState3[0],
      setWithAgeAndGender = _useState3[1];

  var _useState4 = Object(react["useState"])(true),
      withShowBoxes = _useState4[0],
      setWithShowBoxes = _useState4[1];

  var _useState5 = Object(react["useState"])(true),
      withShowFaceLandmarks = _useState5[0],
      setWithShowFaceLandmarks = _useState5[1];

  function getState() {
    return {
      withFaceLandmarks: withFaceLandmarks,
      withFaceExpressions: withFaceExpressions,
      withAgeAndGender: withAgeAndGender,
      withShowBoxes: withShowBoxes,
      withShowFaceLandmarks: withShowFaceLandmarks
    };
  }

  function onChangeWithFaceLandmarks() {
    setWithFaceLandmarks(!withFaceLandmarks);
    onChange(Object.assign({}, getState(), {
      withFaceLandmarks: !withFaceLandmarks
    }));
  }

  function onChangeWithFaceExpressions() {
    setWithFaceExpressions(!withFaceExpressions);
    onChange(Object.assign({}, getState(), {
      withFaceExpressions: !withFaceExpressions
    }));
  }

  function onChangeWithAgeAndGender() {
    setWithAgeAndGender(!withAgeAndGender);
    onChange(Object.assign({}, getState(), {
      withAgeAndGender: !withAgeAndGender
    }));
  }

  function onChangeWithShowBoxes() {
    setWithShowBoxes(!withShowBoxes);
    onChange(Object.assign({}, getState(), {
      withShowBoxes: !withShowBoxes
    }));
  }

  function onChangeWithShowFaceLandmarks() {
    setWithShowFaceLandmarks(!withShowFaceLandmarks);
    onChange(Object.assign({}, getState(), {
      withShowFaceLandmarks: !withShowFaceLandmarks
    }));
  }

  return react["createElement"](Container, null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](FaceClassificationToggleControls_Checkbox, {
    label: "Face Landmarks",
    isActive: withFaceLandmarks,
    onChange: onChangeWithFaceLandmarks
  }), react["createElement"](FaceClassificationToggleControls_Checkbox, {
    label: "Face Expressions",
    isActive: withFaceExpressions,
    onChange: onChangeWithFaceExpressions
  }), react["createElement"](FaceClassificationToggleControls_Checkbox, {
    label: "Age and Gender",
    isActive: withAgeAndGender,
    onChange: onChangeWithAgeAndGender
  })), react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](FaceClassificationToggleControls_Checkbox, {
    label: "Show Boxes",
    isActive: withShowBoxes,
    onChange: onChangeWithShowBoxes
  }), react["createElement"](FaceClassificationToggleControls_Checkbox, {
    label: "Show Face Landmarks",
    isActive: withShowFaceLandmarks,
    onChange: onChangeWithShowFaceLandmarks
  })));
}
// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(204);

// EXTERNAL MODULE: ./src/container/BasePage.tsx + 22 modules
var BasePage = __webpack_require__(362);

// CONCATENATED MODULE: ./src/pages/face_classification.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFaceClassificationInputs", function() { return processFaceClassificationInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return face_classification_default; });















function processFaceClassificationInputs(_x) {
  return _processFaceClassificationInputs.apply(this, arguments);
}

function _processFaceClassificationInputs() {
  _processFaceClassificationInputs = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(pageState) {
    var mediaElement, overlay, isFaceDetectorLoaded, areModelsLoaded, faceDetectionOptions, withFaceLandmarks, withFaceExpressions, withAgeAndGender, withShowBoxes, withShowFaceLandmarks, element, faceDetectionTask, composedTask, classificationTask, detectionsAndLandmarks, classificationResults, dimensions;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mediaElement = pageState.mediaElement, overlay = pageState.overlay, isFaceDetectorLoaded = pageState.isFaceDetectorLoaded, areModelsLoaded = pageState.areModelsLoaded, faceDetectionOptions = pageState.faceDetectionOptions, withFaceLandmarks = pageState.withFaceLandmarks, withFaceExpressions = pageState.withFaceExpressions, withAgeAndGender = pageState.withAgeAndGender, withShowBoxes = pageState.withShowBoxes, withShowFaceLandmarks = pageState.withShowFaceLandmarks;

            if (!(!mediaElement || !overlay || !isFaceDetectorLoaded || !areModelsLoaded)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return");

          case 3:
            element = mediaElement.element;
            faceDetectionTask = es6["g" /* detectAllFaces */](element, faceDetectionOptions);
            composedTask = withFaceLandmarks ? faceDetectionTask.withFaceLandmarks() : faceDetectionTask;
            classificationTask = withFaceExpressions && withAgeAndGender ? composedTask.withFaceExpressions().withAgeAndGender() : withFaceExpressions ? composedTask.withFaceExpressions().withAgeAndGender() : withAgeAndGender ? composedTask.withAgeAndGender() : null;
            _context3.next = 9;
            return composedTask;

          case 9:
            detectionsAndLandmarks = _context3.sent;

            if (!classificationTask) {
              _context3.next = 16;
              break;
            }

            _context3.next = 13;
            return classificationTask;

          case 13:
            _context3.t0 = _context3.sent;
            _context3.next = 17;
            break;

          case 16:
            _context3.t0 = null;

          case 17:
            classificationResults = _context3.t0;
            dimensions = es6["m" /* matchDimensions */](overlay, overlay, element instanceof HTMLVideoElement);
            es6["o" /* resizeResults */](detectionsAndLandmarks, dimensions).forEach(function (res) {
              if (es6["l" /* isWithFaceLandmarks */](res) && withShowFaceLandmarks) {
                es6["h" /* draw */].drawFaceLandmarks(overlay, res.landmarks);
              }

              if (withShowBoxes) {
                if (es6["l" /* isWithFaceLandmarks */](res)) {
                  es6["h" /* draw */].drawDetections(overlay, res.alignedRect);
                } else {
                  es6["h" /* draw */].drawDetections(overlay, res);
                }
              }
            });

            if (classificationResults) {
              es6["o" /* resizeResults */](classificationResults, dimensions).forEach(function (res) {
                var text = []; // TODO faceapi.isWithAgeAndGender(res)

                if (withAgeAndGender) {
                  var gender = res.gender,
                      genderProbability = res.genderProbability;
                  text.push(es6["p" /* round */](res.age, 0) + " years");
                  text.push(gender + " (" + es6["p" /* round */](genderProbability) + ")");
                }

                if (es6["k" /* isWithFaceExpressions */](res)) {
                  var _res$expressions$asSo = res.expressions.asSortedArray()[0],
                      expression = _res$expressions$asSo.expression,
                      expressionProbability = _res$expressions$asSo.probability;
                  text.push(expression + " (" + es6["p" /* round */](expressionProbability) + ")");
                }

                if (text.length) {
                  var _ref3 = es6["l" /* isWithFaceLandmarks */](res) ? res.alignedRect : res.detection,
                      box = _ref3.box;

                  new es6["h" /* draw */].DrawTextField(text, box.bottomLeft).draw(overlay);
                }
              });
            }

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _processFaceClassificationInputs.apply(this, arguments);
}

var face_classification_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      withFaceLandmarks: false,
      withFaceExpressions: false,
      withAgeAndGender: false,
      withShowBoxes: true,
      withShowFaceLandmarks: true
    };
    _this.loadModels =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([es6["n" /* nets */].faceExpressionNet.loadFromUri(src_const["e" /* MODELS_URI */]), es6["n" /* nets */].ageGenderNet.loadFromUri(src_const["e" /* MODELS_URI */])]);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.processInputs =
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(state) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return processFaceClassificationInputs(Object.assign({}, state, _this.state));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react["createElement"](BasePage["a" /* BasePage */], {
      loadAdditionalModels: this.loadModels,
      processInputs: this.processInputs,
      renderControls: function renderControls() {
        return react["createElement"](FaceClassificationToggleControls, {
          onChange: function onChange(options) {
            return _this2.setState(options);
          }
        });
      }
    });
  };

  return _default;
}(react["Component"]);



/***/ })

}]);
//# sourceMappingURL=component---src-pages-face-classification-tsx-829243471cd14f757862.js.map