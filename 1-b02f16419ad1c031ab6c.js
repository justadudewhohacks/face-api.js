(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js
var tf_core_esm = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/tfjs-image-recognition-base/build/es6/index.js + 47 modules
var es6 = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(139);

// CONCATENATED MODULE: ../face-api.js/build/es6/classes/FaceDetection.js



var FaceDetection_FaceDetection =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceDetection, _super);

  function FaceDetection(score, relativeBox, imageDims) {
    return _super.call(this, score, score, '', relativeBox, imageDims) || this;
  }

  FaceDetection.prototype.forSize = function (width, height) {
    return _super.prototype.forSize.call(this, width, height);
  };

  return FaceDetection;
}(es6["h" /* ObjectDetection */]);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__(175);

// CONCATENATED MODULE: ../face-api.js/build/es6/classes/FaceLandmarks.js


 // face alignment constants

var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;

var FaceLandmarks_FaceLandmarks =
/** @class */
function () {
  function FaceLandmarks(relativeFaceLandmarkPositions, imgDims, shift) {
    if (shift === void 0) {
      shift = new es6["i" /* Point */](0, 0);
    }

    var width = imgDims.width,
        height = imgDims.height;
    this._imgDims = new es6["d" /* Dimensions */](width, height);
    this._shift = shift;
    this._positions = relativeFaceLandmarkPositions.map(function (pt) {
      return pt.mul(new es6["i" /* Point */](width, height)).add(shift);
    });
  }

  Object.defineProperty(FaceLandmarks.prototype, "shift", {
    get: function get() {
      return new es6["i" /* Point */](this._shift.x, this._shift.y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceLandmarks.prototype, "imageWidth", {
    get: function get() {
      return this._imgDims.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceLandmarks.prototype, "imageHeight", {
    get: function get() {
      return this._imgDims.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceLandmarks.prototype, "positions", {
    get: function get() {
      return this._positions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceLandmarks.prototype, "relativePositions", {
    get: function get() {
      var _this = this;

      return this._positions.map(function (pt) {
        return pt.sub(_this._shift).div(new es6["i" /* Point */](_this.imageWidth, _this.imageHeight));
      });
    },
    enumerable: true,
    configurable: true
  });

  FaceLandmarks.prototype.forSize = function (width, height) {
    return new this.constructor(this.relativePositions, {
      width: width,
      height: height
    });
  };

  FaceLandmarks.prototype.shiftBy = function (x, y) {
    return new this.constructor(this.relativePositions, this._imgDims, new es6["i" /* Point */](x, y));
  };

  FaceLandmarks.prototype.shiftByPoint = function (pt) {
    return this.shiftBy(pt.x, pt.y);
  };
  /**
   * Aligns the face landmarks after face detection from the relative positions of the faces
   * bounding box, or it's current shift. This function should be used to align the face images
   * after face detection has been performed, before they are passed to the face recognition net.
   * This will make the computed face descriptor more accurate.
   *
   * @param detection (optional) The bounding box of the face or the face detection result. If
   * no argument was passed the position of the face landmarks are assumed to be relative to
   * it's current shift.
   * @returns The bounding box of the aligned face.
   */


  FaceLandmarks.prototype.align = function (detection) {
    if (detection) {
      var box = detection instanceof FaceDetection_FaceDetection ? detection.box.floor() : detection;
      return this.shiftBy(box.x, box.y).align();
    }

    var centers = this.getRefPointsForAlignment();
    var leftEyeCenter = centers[0],
        rightEyeCenter = centers[1],
        mouthCenter = centers[2];

    var distToMouth = function distToMouth(pt) {
      return mouthCenter.sub(pt).magnitude();
    };

    var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
    var size = Math.floor(eyeToMouthDist / relScale);
    var refPoint = Object(es6["B" /* getCenterPoint */])(centers); // TODO: pad in case rectangle is out of image bounds

    var x = Math.floor(Math.max(0, refPoint.x - relX * size));
    var y = Math.floor(Math.max(0, refPoint.y - relY * size));
    return new es6["k" /* Rect */](x, y, Math.min(size, this.imageWidth + x), Math.min(size, this.imageHeight + y));
  };

  FaceLandmarks.prototype.getRefPointsForAlignment = function () {
    throw new Error('getRefPointsForAlignment not implemented by base class');
  };

  return FaceLandmarks;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/classes/FaceLandmarks5.js




var FaceLandmarks5_FaceLandmarks5 =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmarks5, _super);

  function FaceLandmarks5() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FaceLandmarks5.prototype.getRefPointsForAlignment = function () {
    var pts = this.positions;
    return [pts[0], pts[1], Object(es6["B" /* getCenterPoint */])([pts[3], pts[4]])];
  };

  return FaceLandmarks5;
}(FaceLandmarks_FaceLandmarks);


// CONCATENATED MODULE: ../face-api.js/build/es6/classes/FaceLandmarks68.js




var FaceLandmarks68_FaceLandmarks68 =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmarks68, _super);

  function FaceLandmarks68() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FaceLandmarks68.prototype.getJawOutline = function () {
    return this.positions.slice(0, 17);
  };

  FaceLandmarks68.prototype.getLeftEyeBrow = function () {
    return this.positions.slice(17, 22);
  };

  FaceLandmarks68.prototype.getRightEyeBrow = function () {
    return this.positions.slice(22, 27);
  };

  FaceLandmarks68.prototype.getNose = function () {
    return this.positions.slice(27, 36);
  };

  FaceLandmarks68.prototype.getLeftEye = function () {
    return this.positions.slice(36, 42);
  };

  FaceLandmarks68.prototype.getRightEye = function () {
    return this.positions.slice(42, 48);
  };

  FaceLandmarks68.prototype.getMouth = function () {
    return this.positions.slice(48, 68);
  };

  FaceLandmarks68.prototype.getRefPointsForAlignment = function () {
    return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(es6["B" /* getCenterPoint */]);
  };

  return FaceLandmarks68;
}(FaceLandmarks_FaceLandmarks);


// CONCATENATED MODULE: ../face-api.js/build/es6/classes/FaceMatch.js


var FaceMatch_FaceMatch =
/** @class */
function () {
  function FaceMatch(label, distance) {
    this._label = label;
    this._distance = distance;
  }

  Object.defineProperty(FaceMatch.prototype, "label", {
    get: function get() {
      return this._label;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceMatch.prototype, "distance", {
    get: function get() {
      return this._distance;
    },
    enumerable: true,
    configurable: true
  });

  FaceMatch.prototype.toString = function (withDistance) {
    if (withDistance === void 0) {
      withDistance = true;
    }

    return "" + this.label + (withDistance ? " (" + Object(es6["cb" /* round */])(this.distance) + ")" : '');
  };

  return FaceMatch;
}();


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__(313);

// CONCATENATED MODULE: ../face-api.js/build/es6/classes/LabeledFaceDescriptors.js


var LabeledFaceDescriptors =
/** @class */
function () {
  function LabeledFaceDescriptors(label, descriptors) {
    if (!(typeof label === 'string')) {
      throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
    }

    if (!Array.isArray(descriptors) || descriptors.some(function (desc) {
      return !(desc instanceof Float32Array);
    })) {
      throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
    }

    this._label = label;
    this._descriptors = descriptors;
  }

  Object.defineProperty(LabeledFaceDescriptors.prototype, "label", {
    get: function get() {
      return this._label;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LabeledFaceDescriptors.prototype, "descriptors", {
    get: function get() {
      return this._descriptors;
    },
    enumerable: true,
    configurable: true
  });
  return LabeledFaceDescriptors;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/classes/index.js






// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(68);

// CONCATENATED MODULE: ../face-api.js/build/es6/dom/drawContour.js

function drawContour(ctx, points, isClosed) {
  if (isClosed === void 0) {
    isClosed = false;
  }

  ctx.beginPath();
  points.slice(1).forEach(function (_a, prevIdx) {
    var x = _a.x,
        y = _a.y;
    var from = points[prevIdx];
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(x, y);
  });

  if (isClosed) {
    var from = points[points.length - 1];
    var to = points[0];

    if (!from || !to) {
      return;
    }

    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
  }

  ctx.stroke();
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// CONCATENATED MODULE: ../face-api.js/build/es6/dom/drawLandmarks.js





function drawLandmarks(canvasArg, faceLandmarks, options) {
  var canvas = Object(es6["bb" /* resolveInput */])(canvasArg);

  if (!(canvas instanceof es6["u" /* env */].getEnv().Canvas)) {
    throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
  }

  var drawOptions = Object.assign(Object(es6["D" /* getDefaultDrawOptions */])(options), options || {});
  var drawLines = Object.assign({
    drawLines: false
  }, options || {}).drawLines;
  var ctx = Object(es6["C" /* getContext2dOrThrow */])(canvas);
  var lineWidth = drawOptions.lineWidth,
      _a = drawOptions.color,
      color = _a === void 0 ? 'blue' : _a;
  var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
  faceLandmarksArray.forEach(function (landmarks) {
    if (drawLines && landmarks instanceof FaceLandmarks68_FaceLandmarks68) {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      drawContour(ctx, landmarks.getJawOutline());
      drawContour(ctx, landmarks.getLeftEyeBrow());
      drawContour(ctx, landmarks.getRightEyeBrow());
      drawContour(ctx, landmarks.getNose());
      drawContour(ctx, landmarks.getLeftEye(), true);
      drawContour(ctx, landmarks.getRightEye(), true);
      drawContour(ctx, landmarks.getMouth(), true);
      return;
    } // else draw points


    var ptOffset = lineWidth / 2;
    ctx.fillStyle = color;
    landmarks.positions.forEach(function (pt) {
      return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(318);

// CONCATENATED MODULE: ../face-api.js/build/es6/dom/drawFaceExpressions.js




function drawFaceExpressions(canvasArg, faceExpressions, options) {
  var canvas = Object(es6["bb" /* resolveInput */])(canvasArg);

  if (!(canvas instanceof es6["u" /* env */].getEnv().Canvas)) {
    throw new Error('drawFaceExpressions - expected canvas to be of type: HTMLCanvasElement');
  }

  var drawOptions = Object.assign(Object(es6["D" /* getDefaultDrawOptions */])(options), options || {});
  var ctx = Object(es6["C" /* getContext2dOrThrow */])(canvas);
  var _a = drawOptions.primaryColor,
      primaryColor = _a === void 0 ? 'red' : _a,
      _b = drawOptions.secondaryColor,
      secondaryColor = _b === void 0 ? 'blue' : _b,
      _c = drawOptions.primaryFontSize,
      primaryFontSize = _c === void 0 ? 22 : _c,
      _d = drawOptions.secondaryFontSize,
      secondaryFontSize = _d === void 0 ? 16 : _d,
      _e = drawOptions.minConfidence,
      minConfidence = _e === void 0 ? 0.2 : _e;
  var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
  faceExpressionsArray.forEach(function (_a) {
    var position = _a.position,
        expressions = _a.expressions;
    var x = position.x,
        y = position.y;
    var height = position.height || 0;
    var sorted = expressions.sort(function (a, b) {
      return b.probability - a.probability;
    });
    var resultsToDisplay = sorted.filter(function (expr) {
      return expr.probability > minConfidence;
    });
    var offset = y + height + resultsToDisplay.length * primaryFontSize > canvas.height ? -(resultsToDisplay.length * primaryFontSize) : 0;
    resultsToDisplay.forEach(function (expr, i) {
      var text = expr.expression + " (" + Object(es6["cb" /* round */])(expr.probability) + ")";
      Object(es6["t" /* drawText */])(ctx, x, y + height + i * primaryFontSize + offset, text, {
        textColor: i === 0 ? primaryColor : secondaryColor,
        fontSize: i === 0 ? primaryFontSize : secondaryFontSize
      });
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/dom/extractFaces.js



/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */

function extractFaces(input, detections) {
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    var Canvas, canvas, netInput, tensorOrCanvas, _a, ctx, boxes;

    return tslib_es6["d" /* __generator */](this, function (_b) {
      switch (_b.label) {
        case 0:
          Canvas = es6["u" /* env */].getEnv().Canvas;
          canvas = input;
          if (!!(input instanceof Canvas)) return [3
          /*break*/
          , 5];
          return [4
          /*yield*/
          , Object(es6["fb" /* toNetInput */])(input)];

        case 1:
          netInput = _b.sent();

          if (netInput.batchSize > 1) {
            throw new Error('extractFaces - batchSize > 1 not supported');
          }

          tensorOrCanvas = netInput.getInput(0);
          if (!(tensorOrCanvas instanceof Canvas)) return [3
          /*break*/
          , 2];
          _a = tensorOrCanvas;
          return [3
          /*break*/
          , 4];

        case 2:
          return [4
          /*yield*/
          , Object(es6["G" /* imageTensorToCanvas */])(tensorOrCanvas)];

        case 3:
          _a = _b.sent();
          _b.label = 4;

        case 4:
          canvas = _a;
          _b.label = 5;

        case 5:
          ctx = Object(es6["C" /* getContext2dOrThrow */])(canvas);
          boxes = detections.map(function (det) {
            return det instanceof FaceDetection_FaceDetection ? det.forSize(canvas.width, canvas.height).box.floor() : det;
          }).map(function (box) {
            return box.clipAtImageBorders(canvas.width, canvas.height);
          });
          return [2
          /*return*/
          , boxes.map(function (_a) {
            var x = _a.x,
                y = _a.y,
                width = _a.width,
                height = _a.height;
            var faceImg = Object(es6["o" /* createCanvas */])({
              width: width,
              height: height
            });
            Object(es6["C" /* getContext2dOrThrow */])(faceImg).putImageData(ctx.getImageData(x, y, width, height), 0, 0);
            return faceImg;
          })];
      }
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/dom/extractFaceTensors.js




/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Useful if you want to compute the face descriptors for the face images.
 * Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param imageTensor The image tensor that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */

function extractFaceTensors(imageTensor, detections) {
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    return tslib_es6["d" /* __generator */](this, function (_a) {
      if (!Object(es6["S" /* isTensor3D */])(imageTensor) && !Object(es6["T" /* isTensor4D */])(imageTensor)) {
        throw new Error('extractFaceTensors - expected image tensor to be 3D or 4D');
      }

      if (Object(es6["T" /* isTensor4D */])(imageTensor) && imageTensor.shape[0] > 1) {
        throw new Error('extractFaceTensors - batchSize > 1 not supported');
      }

      return [2
      /*return*/
      , tf_core_esm["tidy"](function () {
        var _a = imageTensor.shape.slice(Object(es6["T" /* isTensor4D */])(imageTensor) ? 1 : 0),
            imgHeight = _a[0],
            imgWidth = _a[1],
            numChannels = _a[2];

        var boxes = detections.map(function (det) {
          return det instanceof FaceDetection_FaceDetection ? det.forSize(imgWidth, imgHeight).box : det;
        }).map(function (box) {
          return box.clipAtImageBorders(imgWidth, imgHeight);
        });
        var faceTensors = boxes.map(function (_a) {
          var x = _a.x,
              y = _a.y,
              width = _a.width,
              height = _a.height;
          return tf_core_esm["slice3d"](imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
        });
        return faceTensors;
      })];
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/dom/index.js





// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(241);

// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/depthwiseSeparableConv.js

function depthwiseSeparableConv(x, params, stride) {
  return tf_core_esm["tidy"](function () {
    var out = tf_core_esm["separableConv2d"](x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
    out = tf_core_esm["add"](out, params.bias);
    return out;
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/denseBlock.js


function denseBlock3(x, denseBlockParams, isFirstLayer) {
  if (isFirstLayer === void 0) {
    isFirstLayer = false;
  }

  return tf_core_esm["tidy"](function () {
    var out1 = tf_core_esm["relu"](isFirstLayer ? tf_core_esm["add"](tf_core_esm["conv2d"](x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias) : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
    var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
    var in3 = tf_core_esm["relu"](tf_core_esm["add"](out1, out2));
    var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
    return tf_core_esm["relu"](tf_core_esm["add"](out1, tf_core_esm["add"](out2, out3)));
  });
}
function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
  if (isFirstLayer === void 0) {
    isFirstLayer = false;
  }

  if (isScaleDown === void 0) {
    isScaleDown = true;
  }

  return tf_core_esm["tidy"](function () {
    var out1 = tf_core_esm["relu"](isFirstLayer ? tf_core_esm["add"](tf_core_esm["conv2d"](x, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], 'same'), denseBlockParams.conv0.bias) : depthwiseSeparableConv(x, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
    var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
    var in3 = tf_core_esm["relu"](tf_core_esm["add"](out1, out2));
    var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
    var in4 = tf_core_esm["relu"](tf_core_esm["add"](out1, tf_core_esm["add"](out2, out3)));
    var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
    return tf_core_esm["relu"](tf_core_esm["add"](out1, tf_core_esm["add"](out2, tf_core_esm["add"](out3, out4))));
  });
}
// EXTERNAL MODULE: ../face-api.js/node_modules/tfjs-tiny-yolov2/build/es6/index.js + 19 modules
var build_es6 = __webpack_require__(161);

// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/extractorsFactory.js


function extractorsFactory(extractWeights, paramMappings) {
  function extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix) {
    var depthwise_filter = tf_core_esm["tensor4d"](extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
    var pointwise_filter = tf_core_esm["tensor4d"](extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
    var bias = tf_core_esm["tensor1d"](extractWeights(channelsOut));
    paramMappings.push({
      paramPath: mappedPrefix + "/depthwise_filter"
    }, {
      paramPath: mappedPrefix + "/pointwise_filter"
    }, {
      paramPath: mappedPrefix + "/bias"
    });
    return new build_es6["a" /* SeparableConvParams */](depthwise_filter, pointwise_filter, bias);
  }

  var extractConvParams = Object(build_es6["e" /* extractConvParamsFactory */])(extractWeights, paramMappings);

  function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }

    var conv0 = isFirstLayer ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0") : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
    var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
    var conv2 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
    return {
      conv0: conv0,
      conv1: conv1,
      conv2: conv2
    };
  }

  function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }

    var _a = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer),
        conv0 = _a.conv0,
        conv1 = _a.conv1,
        conv2 = _a.conv2;

    var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
    return {
      conv0: conv0,
      conv1: conv1,
      conv2: conv2,
      conv3: conv3
    };
  }

  return {
    extractDenseBlock3Params: extractDenseBlock3Params,
    extractDenseBlock4Params: extractDenseBlock4Params
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/extractParams.js


function extractParams(weights) {
  var paramMappings = [];

  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var extractDenseBlock4Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock4Params;
  var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
  var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
  var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
  var dense3 = extractDenseBlock4Params(128, 256, 'dense3');

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  return {
    paramMappings: paramMappings,
    params: {
      dense0: dense0,
      dense1: dense1,
      dense2: dense2,
      dense3: dense3
    }
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/loadParamsFactory.js


function loadParamsFactory(weightMap, paramMappings) {
  var extractWeightEntry = Object(es6["v" /* extractWeightEntryFactory */])(weightMap, paramMappings);

  function extractConvParams(prefix) {
    var filters = extractWeightEntry(prefix + "/filters", 4);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return {
      filters: filters,
      bias: bias
    };
  }

  function extractSeparableConvParams(prefix) {
    var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
    var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return new build_es6["a" /* SeparableConvParams */](depthwise_filter, pointwise_filter, bias);
  }

  function extractDenseBlock3Params(prefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }

    var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
    var conv1 = extractSeparableConvParams(prefix + "/conv1");
    var conv2 = extractSeparableConvParams(prefix + "/conv2");
    return {
      conv0: conv0,
      conv1: conv1,
      conv2: conv2
    };
  }

  function extractDenseBlock4Params(prefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }

    var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
    var conv1 = extractSeparableConvParams(prefix + "/conv1");
    var conv2 = extractSeparableConvParams(prefix + "/conv2");
    var conv3 = extractSeparableConvParams(prefix + "/conv3");
    return {
      conv0: conv0,
      conv1: conv1,
      conv2: conv2,
      conv3: conv3
    };
  }

  return {
    extractDenseBlock3Params: extractDenseBlock3Params,
    extractDenseBlock4Params: extractDenseBlock4Params
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMap.js


function extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];
  var extractDenseBlock4Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock4Params;
  var params = {
    dense0: extractDenseBlock4Params('dense0', true),
    dense1: extractDenseBlock4Params('dense1'),
    dense2: extractDenseBlock4Params('dense2'),
    dense3: extractDenseBlock4Params('dense3')
  };
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/FaceFeatureExtractor.js







var FaceFeatureExtractor_FaceFeatureExtractor =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceFeatureExtractor, _super);

  function FaceFeatureExtractor() {
    return _super.call(this, 'FaceFeatureExtractor') || this;
  }

  FaceFeatureExtractor.prototype.forwardInput = function (input) {
    var params = this.params;

    if (!params) {
      throw new Error('FaceFeatureExtractor - load model before inference');
    }

    return tf_core_esm["tidy"](function () {
      var batchTensor = input.toBatchTensor(112, true);
      var meanRgb = [122.782, 117.001, 104.298];
      var normalized = Object(es6["Y" /* normalize */])(batchTensor, meanRgb).div(tf_core_esm["scalar"](255));
      var out = denseBlock4(normalized, params.dense0, true);
      out = denseBlock4(out, params.dense1);
      out = denseBlock4(out, params.dense2);
      out = denseBlock4(out, params.dense3);
      out = tf_core_esm["avgPool"](out, [7, 7], [2, 2], 'valid');
      return out;
    });
  };

  FaceFeatureExtractor.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  FaceFeatureExtractor.prototype.getDefaultModelName = function () {
    return 'face_feature_extractor_model';
  };

  FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return extractParamsFromWeigthMap(weightMap);
  };

  FaceFeatureExtractor.prototype.extractParams = function (weights) {
    return extractParams(weights);
  };

  return FaceFeatureExtractor;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/common/fullyConnectedLayer.js

function fullyConnectedLayer(x, params) {
  return tf_core_esm["tidy"](function () {
    return tf_core_esm["add"](tf_core_esm["matMul"](x, params.weights), params.bias);
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceProcessor/extractParams.js


function extractParams_extractParams(weights, channelsIn, channelsOut) {
  var paramMappings = [];

  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var extractFCParams = Object(build_es6["f" /* extractFCParamsFactory */])(extractWeights, paramMappings);
  var fc = extractFCParams(channelsIn, channelsOut, 'fc');

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  return {
    paramMappings: paramMappings,
    params: {
      fc: fc
    }
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceProcessor/extractParamsFromWeigthMap.js

function extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];
  var extractWeightEntry = Object(es6["v" /* extractWeightEntryFactory */])(weightMap, paramMappings);

  function extractFcParams(prefix) {
    var weights = extractWeightEntry(prefix + "/weights", 2);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return {
      weights: weights,
      bias: bias
    };
  }

  var params = {
    fc: extractFcParams('fc')
  };
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__(531);

// CONCATENATED MODULE: ../face-api.js/build/es6/faceProcessor/util.js




function seperateWeightMaps(weightMap) {
  var featureExtractorMap = {};
  var classifierMap = {};
  Object.keys(weightMap).forEach(function (key) {
    var map = key.startsWith('fc') ? classifierMap : featureExtractorMap;
    map[key] = weightMap[key];
  });
  return {
    featureExtractorMap: featureExtractorMap,
    classifierMap: classifierMap
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceProcessor/FaceProcessor.js








var FaceProcessor_FaceProcessor =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceProcessor, _super);

  function FaceProcessor(_name, faceFeatureExtractor) {
    var _this = _super.call(this, _name) || this;

    _this._faceFeatureExtractor = faceFeatureExtractor;
    return _this;
  }

  Object.defineProperty(FaceProcessor.prototype, "faceFeatureExtractor", {
    get: function get() {
      return this._faceFeatureExtractor;
    },
    enumerable: true,
    configurable: true
  });

  FaceProcessor.prototype.runNet = function (input) {
    var _this = this;

    var params = this.params;

    if (!params) {
      throw new Error(this._name + " - load model before inference");
    }

    return tf_core_esm["tidy"](function () {
      var bottleneckFeatures = input instanceof es6["f" /* NetInput */] ? _this.faceFeatureExtractor.forwardInput(input) : input;
      return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
    });
  };

  FaceProcessor.prototype.dispose = function (throwOnRedispose) {
    if (throwOnRedispose === void 0) {
      throwOnRedispose = true;
    }

    this.faceFeatureExtractor.dispose(throwOnRedispose);

    _super.prototype.dispose.call(this, throwOnRedispose);
  };

  FaceProcessor.prototype.loadClassifierParams = function (weights) {
    var _a = this.extractClassifierParams(weights),
        params = _a.params,
        paramMappings = _a.paramMappings;

    this._params = params;
    this._paramMappings = paramMappings;
  };

  FaceProcessor.prototype.extractClassifierParams = function (weights) {
    return extractParams_extractParams(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
  };

  FaceProcessor.prototype.extractParamsFromWeigthMap = function (weightMap) {
    var _a = seperateWeightMaps(weightMap),
        featureExtractorMap = _a.featureExtractorMap,
        classifierMap = _a.classifierMap;

    this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
    return extractParamsFromWeigthMap_extractParamsFromWeigthMap(classifierMap);
  };

  FaceProcessor.prototype.extractParams = function (weights) {
    var cIn = this.getClassifierChannelsIn();
    var cOut = this.getClassifierChannelsOut();
    var classifierWeightSize = cOut * cIn + cOut;
    var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
    var classifierWeights = weights.slice(weights.length - classifierWeightSize);
    this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
    return this.extractClassifierParams(classifierWeights);
  };

  return FaceProcessor;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceExpressionNet/types.js
var faceExpressionLabels = {
  neutral: 0,
  happy: 1,
  sad: 2,
  angry: 3,
  fearful: 4,
  disgusted: 5,
  surprised: 6
};
// CONCATENATED MODULE: ../face-api.js/build/es6/faceExpressionNet/FaceExpressionNet.js












var FaceExpressionNet_FaceExpressionNet =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceExpressionNet, _super);

  function FaceExpressionNet(faceFeatureExtractor) {
    if (faceFeatureExtractor === void 0) {
      faceFeatureExtractor = new FaceFeatureExtractor_FaceFeatureExtractor();
    }

    return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
  }

  FaceExpressionNet.getFaceExpressionLabel = function (faceExpression) {
    var label = faceExpressionLabels[faceExpression];

    if (typeof label !== 'number') {
      throw new Error("getFaceExpressionLabel - no label for faceExpression: " + faceExpression);
    }

    return label;
  };

  FaceExpressionNet.decodeProbabilites = function (probabilities) {
    if (probabilities.length !== 7) {
      throw new Error("decodeProbabilites - expected probabilities.length to be 7, have: " + probabilities.length);
    }

    return Object.keys(faceExpressionLabels).map(function (expression) {
      return {
        expression: expression,
        probability: probabilities[faceExpressionLabels[expression]]
      };
    });
  };

  FaceExpressionNet.prototype.forwardInput = function (input) {
    var _this = this;

    return tf_core_esm["tidy"](function () {
      return tf_core_esm["softmax"](_this.runNet(input));
    });
  };

  FaceExpressionNet.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  FaceExpressionNet.prototype.predictExpressions = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _this = this;

      var netInput, out, probabilitesByBatch, predictionsByBatch;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            netInput = _a.sent();
            return [4
            /*yield*/
            , this.forwardInput(netInput)];

          case 2:
            out = _a.sent();
            return [4
            /*yield*/
            , Promise.all(tf_core_esm["unstack"](out).map(function (t) {
              return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
                var data;
                return tslib_es6["d" /* __generator */](this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , t.data()];

                    case 1:
                      data = _a.sent();
                      t.dispose();
                      return [2
                      /*return*/
                      , data];
                  }
                });
              });
            }))];

          case 3:
            probabilitesByBatch = _a.sent();
            out.dispose();
            predictionsByBatch = probabilitesByBatch.map(function (propablities) {
              return FaceExpressionNet.decodeProbabilites(propablities);
            });
            return [2
            /*return*/
            , netInput.isBatchInput ? predictionsByBatch : predictionsByBatch[0]];
        }
      });
    });
  };

  FaceExpressionNet.prototype.getDefaultModelName = function () {
    return 'face_expression_model';
  };

  FaceExpressionNet.prototype.getClassifierChannelsIn = function () {
    return 256;
  };

  FaceExpressionNet.prototype.getClassifierChannelsOut = function () {
    return 7;
  };

  return FaceExpressionNet;
}(FaceProcessor_FaceProcessor);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceExpressionNet/index.js


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__(319);

// CONCATENATED MODULE: ../face-api.js/build/es6/faceLandmarkNet/FaceLandmark68NetBase.js













var FaceLandmark68NetBase_FaceLandmark68NetBase =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmark68NetBase, _super);

  function FaceLandmark68NetBase() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FaceLandmark68NetBase.prototype.postProcess = function (output, inputSize, originalDimensions) {
    var inputDimensions = originalDimensions.map(function (_a) {
      var width = _a.width,
          height = _a.height;
      var scale = inputSize / Math.max(height, width);
      return {
        width: width * scale,
        height: height * scale
      };
    });
    var batchSize = inputDimensions.length;
    return tf_core_esm["tidy"](function () {
      var createInterleavedTensor = function createInterleavedTensor(fillX, fillY) {
        return tf_core_esm["stack"]([tf_core_esm["fill"]([68], fillX), tf_core_esm["fill"]([68], fillY)], 1).as2D(1, 136).as1D();
      };

      var getPadding = function getPadding(batchIdx, cond) {
        var _a = inputDimensions[batchIdx],
            width = _a.width,
            height = _a.height;
        return cond(width, height) ? Math.abs(width - height) / 2 : 0;
      };

      var getPaddingX = function getPaddingX(batchIdx) {
        return getPadding(batchIdx, function (w, h) {
          return w < h;
        });
      };

      var getPaddingY = function getPaddingY(batchIdx) {
        return getPadding(batchIdx, function (w, h) {
          return h < w;
        });
      };

      var landmarkTensors = output.mul(tf_core_esm["fill"]([batchSize, 136], inputSize)).sub(tf_core_esm["stack"](Array.from(Array(batchSize), function (_, batchIdx) {
        return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
      }))).div(tf_core_esm["stack"](Array.from(Array(batchSize), function (_, batchIdx) {
        return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
      })));
      return landmarkTensors;
    });
  };

  FaceLandmark68NetBase.prototype.forwardInput = function (input) {
    var _this = this;

    return tf_core_esm["tidy"](function () {
      var out = _this.runNet(input);

      return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function (_a) {
        var height = _a[0],
            width = _a[1];
        return {
          height: height,
          width: width
        };
      }));
    });
  };

  FaceLandmark68NetBase.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  FaceLandmark68NetBase.prototype.detectLandmarks = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _this = this;

      var netInput, landmarkTensors, landmarksForBatch;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            netInput = _a.sent();
            landmarkTensors = tf_core_esm["tidy"](function () {
              return tf_core_esm["unstack"](_this.forwardInput(netInput));
            });
            return [4
            /*yield*/
            , Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) {
              return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
                var landmarksArray, _a, _b, xCoords, yCoords;

                return tslib_es6["d" /* __generator */](this, function (_c) {
                  switch (_c.label) {
                    case 0:
                      _b = (_a = Array).from;
                      return [4
                      /*yield*/
                      , landmarkTensor.data()];

                    case 1:
                      landmarksArray = _b.apply(_a, [_c.sent()]);
                      xCoords = landmarksArray.filter(function (_, i) {
                        return Object(es6["L" /* isEven */])(i);
                      });
                      yCoords = landmarksArray.filter(function (_, i) {
                        return !Object(es6["L" /* isEven */])(i);
                      });
                      return [2
                      /*return*/
                      , new FaceLandmarks68_FaceLandmarks68(Array(68).fill(0).map(function (_, i) {
                        return new es6["i" /* Point */](xCoords[i], yCoords[i]);
                      }), {
                        height: netInput.getInputHeight(batchIdx),
                        width: netInput.getInputWidth(batchIdx)
                      })];
                  }
                });
              });
            }))];

          case 2:
            landmarksForBatch = _a.sent();
            landmarkTensors.forEach(function (t) {
              return t.dispose();
            });
            return [2
            /*return*/
            , netInput.isBatchInput ? landmarksForBatch : landmarksForBatch[0]];
        }
      });
    });
  };

  FaceLandmark68NetBase.prototype.getClassifierChannelsOut = function () {
    return 136;
  };

  return FaceLandmark68NetBase;
}(FaceProcessor_FaceProcessor);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceLandmarkNet/FaceLandmark68Net.js




var FaceLandmark68Net_FaceLandmark68Net =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmark68Net, _super);

  function FaceLandmark68Net(faceFeatureExtractor) {
    if (faceFeatureExtractor === void 0) {
      faceFeatureExtractor = new FaceFeatureExtractor_FaceFeatureExtractor();
    }

    return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
  }

  FaceLandmark68Net.prototype.getDefaultModelName = function () {
    return 'face_landmark_68_model';
  };

  FaceLandmark68Net.prototype.getClassifierChannelsIn = function () {
    return 256;
  };

  return FaceLandmark68Net;
}(FaceLandmark68NetBase_FaceLandmark68NetBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMapTiny.js


function extractParamsFromWeigthMapTiny(weightMap) {
  var paramMappings = [];
  var extractDenseBlock3Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
  var params = {
    dense0: extractDenseBlock3Params('dense0', true),
    dense1: extractDenseBlock3Params('dense1'),
    dense2: extractDenseBlock3Params('dense2')
  };
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/extractParamsTiny.js


function extractParamsTiny(weights) {
  var paramMappings = [];

  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var extractDenseBlock3Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock3Params;
  var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
  var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
  var dense2 = extractDenseBlock3Params(64, 128, 'dense2');

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  return {
    paramMappings: paramMappings,
    params: {
      dense0: dense0,
      dense1: dense1,
      dense2: dense2
    }
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceFeatureExtractor/TinyFaceFeatureExtractor.js







var TinyFaceFeatureExtractor_TinyFaceFeatureExtractor =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](TinyFaceFeatureExtractor, _super);

  function TinyFaceFeatureExtractor() {
    return _super.call(this, 'TinyFaceFeatureExtractor') || this;
  }

  TinyFaceFeatureExtractor.prototype.forwardInput = function (input) {
    var params = this.params;

    if (!params) {
      throw new Error('TinyFaceFeatureExtractor - load model before inference');
    }

    return tf_core_esm["tidy"](function () {
      var batchTensor = input.toBatchTensor(112, true);
      var meanRgb = [122.782, 117.001, 104.298];
      var normalized = Object(es6["Y" /* normalize */])(batchTensor, meanRgb).div(tf_core_esm["scalar"](255));
      var out = denseBlock3(normalized, params.dense0, true);
      out = denseBlock3(out, params.dense1);
      out = denseBlock3(out, params.dense2);
      out = tf_core_esm["avgPool"](out, [14, 14], [2, 2], 'valid');
      return out;
    });
  };

  TinyFaceFeatureExtractor.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  TinyFaceFeatureExtractor.prototype.getDefaultModelName = function () {
    return 'face_feature_extractor_tiny_model';
  };

  TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return extractParamsFromWeigthMapTiny(weightMap);
  };

  TinyFaceFeatureExtractor.prototype.extractParams = function (weights) {
    return extractParamsTiny(weights);
  };

  return TinyFaceFeatureExtractor;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceLandmarkNet/FaceLandmark68TinyNet.js




var FaceLandmark68TinyNet_FaceLandmark68TinyNet =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmark68TinyNet, _super);

  function FaceLandmark68TinyNet(faceFeatureExtractor) {
    if (faceFeatureExtractor === void 0) {
      faceFeatureExtractor = new TinyFaceFeatureExtractor_TinyFaceFeatureExtractor();
    }

    return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
  }

  FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
    return 'face_landmark_68_tiny_model';
  };

  FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function () {
    return 128;
  };

  return FaceLandmark68TinyNet;
}(FaceLandmark68NetBase_FaceLandmark68NetBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceLandmarkNet/index.js





var faceLandmarkNet_FaceLandmarkNet =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceLandmarkNet, _super);

  function FaceLandmarkNet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return FaceLandmarkNet;
}(FaceLandmark68Net_FaceLandmark68Net);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/scaleLayer.js

function scaleLayer_scale(x, params) {
  return tf_core_esm["add"](tf_core_esm["mul"](x, params.weights), params.biases);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/convLayer.js



function convLayer(x, params, strides, withRelu, padding) {
  if (padding === void 0) {
    padding = 'same';
  }

  var _a = params.conv,
      filters = _a.filters,
      bias = _a.bias;
  var out = tf_core_esm["conv2d"](x, filters, strides, padding);
  out = tf_core_esm["add"](out, bias);
  out = scaleLayer_scale(out, params.scale);
  return withRelu ? tf_core_esm["relu"](out) : out;
}

function convLayer_conv(x, params) {
  return convLayer(x, params, [1, 1], true);
}
function convNoRelu(x, params) {
  return convLayer(x, params, [1, 1], false);
}
function convDown(x, params) {
  return convLayer(x, params, [2, 2], true, 'valid');
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/extractParams.js



function extractParams_extractorsFactory(extractWeights, paramMappings) {
  function extractFilterValues(numFilterValues, numFilters, filterSize) {
    var weights = extractWeights(numFilterValues);
    var depth = weights.length / (numFilters * filterSize * filterSize);

    if (Object(es6["M" /* isFloat */])(depth)) {
      throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
    }

    return tf_core_esm["tidy"](function () {
      return tf_core_esm["transpose"](tf_core_esm["tensor4d"](weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]);
    });
  }

  function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
    var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
    var bias = tf_core_esm["tensor1d"](extractWeights(numFilters));
    paramMappings.push({
      paramPath: mappedPrefix + "/filters"
    }, {
      paramPath: mappedPrefix + "/bias"
    });
    return {
      filters: filters,
      bias: bias
    };
  }

  function extractScaleLayerParams(numWeights, mappedPrefix) {
    var weights = tf_core_esm["tensor1d"](extractWeights(numWeights));
    var biases = tf_core_esm["tensor1d"](extractWeights(numWeights));
    paramMappings.push({
      paramPath: mappedPrefix + "/weights"
    }, {
      paramPath: mappedPrefix + "/biases"
    });
    return {
      weights: weights,
      biases: biases
    };
  }

  function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
    var conv = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
    var scale = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
    return {
      conv: conv,
      scale: scale
    };
  }

  function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
    if (isDown === void 0) {
      isDown = false;
    }

    var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
    var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
    return {
      conv1: conv1,
      conv2: conv2
    };
  }

  return {
    extractConvLayerParams: extractConvLayerParams,
    extractResidualLayerParams: extractResidualLayerParams
  };
}

function faceRecognitionNet_extractParams_extractParams(weights) {
  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var paramMappings = [];

  var _b = extractParams_extractorsFactory(extractWeights, paramMappings),
      extractConvLayerParams = _b.extractConvLayerParams,
      extractResidualLayerParams = _b.extractResidualLayerParams;

  var conv32_down = extractConvLayerParams(4704, 32, 7, 'conv32_down');
  var conv32_1 = extractResidualLayerParams(9216, 32, 3, 'conv32_1');
  var conv32_2 = extractResidualLayerParams(9216, 32, 3, 'conv32_2');
  var conv32_3 = extractResidualLayerParams(9216, 32, 3, 'conv32_3');
  var conv64_down = extractResidualLayerParams(36864, 64, 3, 'conv64_down', true);
  var conv64_1 = extractResidualLayerParams(36864, 64, 3, 'conv64_1');
  var conv64_2 = extractResidualLayerParams(36864, 64, 3, 'conv64_2');
  var conv64_3 = extractResidualLayerParams(36864, 64, 3, 'conv64_3');
  var conv128_down = extractResidualLayerParams(147456, 128, 3, 'conv128_down', true);
  var conv128_1 = extractResidualLayerParams(147456, 128, 3, 'conv128_1');
  var conv128_2 = extractResidualLayerParams(147456, 128, 3, 'conv128_2');
  var conv256_down = extractResidualLayerParams(589824, 256, 3, 'conv256_down', true);
  var conv256_1 = extractResidualLayerParams(589824, 256, 3, 'conv256_1');
  var conv256_2 = extractResidualLayerParams(589824, 256, 3, 'conv256_2');
  var conv256_down_out = extractResidualLayerParams(589824, 256, 3, 'conv256_down_out');
  var fc = tf_core_esm["tidy"](function () {
    return tf_core_esm["transpose"](tf_core_esm["tensor2d"](extractWeights(256 * 128), [128, 256]), [1, 0]);
  });
  paramMappings.push({
    paramPath: "fc"
  });

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  var params = {
    conv32_down: conv32_down,
    conv32_1: conv32_1,
    conv32_2: conv32_2,
    conv32_3: conv32_3,
    conv64_down: conv64_down,
    conv64_1: conv64_1,
    conv64_2: conv64_2,
    conv64_3: conv64_3,
    conv128_down: conv128_down,
    conv128_1: conv128_1,
    conv128_2: conv128_2,
    conv256_down: conv256_down,
    conv256_1: conv256_1,
    conv256_2: conv256_2,
    conv256_down_out: conv256_down_out,
    fc: fc
  };
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/extractParamsFromWeigthMap.js


function extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings) {
  var extractWeightEntry = Object(es6["v" /* extractWeightEntryFactory */])(weightMap, paramMappings);

  function extractScaleLayerParams(prefix) {
    var weights = extractWeightEntry(prefix + "/scale/weights", 1);
    var biases = extractWeightEntry(prefix + "/scale/biases", 1);
    return {
      weights: weights,
      biases: biases
    };
  }

  function extractConvLayerParams(prefix) {
    var filters = extractWeightEntry(prefix + "/conv/filters", 4);
    var bias = extractWeightEntry(prefix + "/conv/bias", 1);
    var scale = extractScaleLayerParams(prefix);
    return {
      conv: {
        filters: filters,
        bias: bias
      },
      scale: scale
    };
  }

  function extractResidualLayerParams(prefix) {
    return {
      conv1: extractConvLayerParams(prefix + "/conv1"),
      conv2: extractConvLayerParams(prefix + "/conv2")
    };
  }

  return {
    extractConvLayerParams: extractConvLayerParams,
    extractResidualLayerParams: extractResidualLayerParams
  };
}

function faceRecognitionNet_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];

  var _a = extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings),
      extractConvLayerParams = _a.extractConvLayerParams,
      extractResidualLayerParams = _a.extractResidualLayerParams;

  var conv32_down = extractConvLayerParams('conv32_down');
  var conv32_1 = extractResidualLayerParams('conv32_1');
  var conv32_2 = extractResidualLayerParams('conv32_2');
  var conv32_3 = extractResidualLayerParams('conv32_3');
  var conv64_down = extractResidualLayerParams('conv64_down');
  var conv64_1 = extractResidualLayerParams('conv64_1');
  var conv64_2 = extractResidualLayerParams('conv64_2');
  var conv64_3 = extractResidualLayerParams('conv64_3');
  var conv128_down = extractResidualLayerParams('conv128_down');
  var conv128_1 = extractResidualLayerParams('conv128_1');
  var conv128_2 = extractResidualLayerParams('conv128_2');
  var conv256_down = extractResidualLayerParams('conv256_down');
  var conv256_1 = extractResidualLayerParams('conv256_1');
  var conv256_2 = extractResidualLayerParams('conv256_2');
  var conv256_down_out = extractResidualLayerParams('conv256_down_out');
  var fc = weightMap['fc'];
  paramMappings.push({
    originalPath: 'fc',
    paramPath: 'fc'
  });

  if (!Object(es6["R" /* isTensor2D */])(fc)) {
    throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
  }

  var params = {
    conv32_down: conv32_down,
    conv32_1: conv32_1,
    conv32_2: conv32_2,
    conv32_3: conv32_3,
    conv64_down: conv64_down,
    conv64_1: conv64_1,
    conv64_2: conv64_2,
    conv64_3: conv64_3,
    conv128_down: conv128_down,
    conv128_1: conv128_1,
    conv128_2: conv128_2,
    conv256_down: conv256_down,
    conv256_1: conv256_1,
    conv256_2: conv256_2,
    conv256_down_out: conv256_down_out,
    fc: fc
  };
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/residualLayer.js


function residual(x, params) {
  var out = convLayer_conv(x, params.conv1);
  out = convNoRelu(out, params.conv2);
  out = tf_core_esm["add"](out, x);
  out = tf_core_esm["relu"](out);
  return out;
}
function residualDown(x, params) {
  var out = convDown(x, params.conv1);
  out = convNoRelu(out, params.conv2);
  var pooled = tf_core_esm["avgPool"](x, 2, 2, 'valid');
  var zeros = tf_core_esm["zeros"](pooled.shape);
  var isPad = pooled.shape[3] !== out.shape[3];
  var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];

  if (isAdjustShape) {
    var padShapeX = out.shape.slice();
    padShapeX[1] = 1;
    var zerosW = tf_core_esm["zeros"](padShapeX);
    out = tf_core_esm["concat"]([out, zerosW], 1);
    var padShapeY = out.shape.slice();
    padShapeY[2] = 1;
    var zerosH = tf_core_esm["zeros"](padShapeY);
    out = tf_core_esm["concat"]([out, zerosH], 2);
  }

  pooled = isPad ? tf_core_esm["concat"]([pooled, zeros], 3) : pooled;
  out = tf_core_esm["add"](pooled, out);
  out = tf_core_esm["relu"](out);
  return out;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/FaceRecognitionNet.js












var FaceRecognitionNet_FaceRecognitionNet =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceRecognitionNet, _super);

  function FaceRecognitionNet() {
    return _super.call(this, 'FaceRecognitionNet') || this;
  }

  FaceRecognitionNet.prototype.forwardInput = function (input) {
    var params = this.params;

    if (!params) {
      throw new Error('FaceRecognitionNet - load model before inference');
    }

    return tf_core_esm["tidy"](function () {
      var batchTensor = input.toBatchTensor(150, true).toFloat();
      var meanRgb = [122.782, 117.001, 104.298];
      var normalized = Object(es6["Y" /* normalize */])(batchTensor, meanRgb).div(tf_core_esm["scalar"](256));
      var out = convDown(normalized, params.conv32_down);
      out = tf_core_esm["maxPool"](out, 3, 2, 'valid');
      out = residual(out, params.conv32_1);
      out = residual(out, params.conv32_2);
      out = residual(out, params.conv32_3);
      out = residualDown(out, params.conv64_down);
      out = residual(out, params.conv64_1);
      out = residual(out, params.conv64_2);
      out = residual(out, params.conv64_3);
      out = residualDown(out, params.conv128_down);
      out = residual(out, params.conv128_1);
      out = residual(out, params.conv128_2);
      out = residualDown(out, params.conv256_down);
      out = residual(out, params.conv256_1);
      out = residual(out, params.conv256_2);
      out = residualDown(out, params.conv256_down_out);
      var globalAvg = out.mean([1, 2]);
      var fullyConnected = tf_core_esm["matMul"](globalAvg, params.fc);
      return fullyConnected;
    });
  };

  FaceRecognitionNet.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _this = this;

      var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            netInput = _a.sent();
            faceDescriptorTensors = tf_core_esm["tidy"](function () {
              return tf_core_esm["unstack"](_this.forwardInput(netInput));
            });
            return [4
            /*yield*/
            , Promise.all(faceDescriptorTensors.map(function (t) {
              return t.data();
            }))];

          case 2:
            faceDescriptorsForBatch = _a.sent();
            faceDescriptorTensors.forEach(function (t) {
              return t.dispose();
            });
            return [2
            /*return*/
            , netInput.isBatchInput ? faceDescriptorsForBatch : faceDescriptorsForBatch[0]];
        }
      });
    });
  };

  FaceRecognitionNet.prototype.getDefaultModelName = function () {
    return 'face_recognition_model';
  };

  FaceRecognitionNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return faceRecognitionNet_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap);
  };

  FaceRecognitionNet.prototype.extractParams = function (weights) {
    return faceRecognitionNet_extractParams_extractParams(weights);
  };

  return FaceRecognitionNet;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/faceRecognitionNet/index.js


function createFaceRecognitionNet(weights) {
  var net = new FaceRecognitionNet_FaceRecognitionNet();
  net.extractWeights(weights);
  return net;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/factories/WithFaceDescriptor.js

function extendWithFaceDescriptor(sourceObj, descriptor) {
  var extension = {
    descriptor: descriptor
  };
  return Object.assign({}, sourceObj, extension);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/factories/WithFaceDetection.js

function extendWithFaceDetection(sourceObj, detection) {
  var extension = {
    detection: detection
  };
  return Object.assign({}, sourceObj, extension);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/factories/WithFaceExpressions.js

function extendWithFaceExpressions(sourceObj, expressions) {
  var extension = {
    expressions: expressions
  };
  return Object.assign({}, sourceObj, extension);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/factories/WithFaceLandmarks.js


function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
  var shift = sourceObj.detection.box;
  var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
  var rect = landmarks.align();
  var imageDims = sourceObj.detection.imageDims;
  var alignedRect = new FaceDetection_FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
  var extension = {
    landmarks: landmarks,
    unshiftedLandmarks: unshiftedLandmarks,
    alignedRect: alignedRect
  };
  return Object.assign({}, sourceObj, extension);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/factories/index.js




// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/MtcnnOptions.js
var MtcnnOptions =
/** @class */
function () {
  function MtcnnOptions(_a) {
    var _b = _a === void 0 ? {} : _a,
        minFaceSize = _b.minFaceSize,
        scaleFactor = _b.scaleFactor,
        maxNumScales = _b.maxNumScales,
        scoreThresholds = _b.scoreThresholds,
        scaleSteps = _b.scaleSteps;

    this._name = 'MtcnnOptions';
    this._minFaceSize = minFaceSize || 20;
    this._scaleFactor = scaleFactor || 0.709;
    this._maxNumScales = maxNumScales || 10;
    this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7];
    this._scaleSteps = scaleSteps;

    if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
      throw new Error(this._name + " - expected minFaceSize to be a number > 0");
    }

    if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
      throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
    }

    if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
      throw new Error(this._name + " - expected maxNumScales to be a number > 0");
    }

    if (!Array.isArray(this._scoreThresholds) || this._scoreThresholds.length !== 3 || this._scoreThresholds.some(function (th) {
      return typeof th !== 'number';
    })) {
      throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
    }

    if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (th) {
      return typeof th !== 'number';
    }))) {
      throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
    }
  }

  Object.defineProperty(MtcnnOptions.prototype, "minFaceSize", {
    get: function get() {
      return this._minFaceSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MtcnnOptions.prototype, "scaleFactor", {
    get: function get() {
      return this._scaleFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MtcnnOptions.prototype, "maxNumScales", {
    get: function get() {
      return this._maxNumScales;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MtcnnOptions.prototype, "scoreThresholds", {
    get: function get() {
      return this._scoreThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MtcnnOptions.prototype, "scaleSteps", {
    get: function get() {
      return this._scaleSteps;
    },
    enumerable: true,
    configurable: true
  });
  return MtcnnOptions;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/extractParams.js



function ssdMobilenetv1_extractParams_extractorsFactory(extractWeights, paramMappings) {
  function extractDepthwiseConvParams(numChannels, mappedPrefix) {
    var filters = tf_core_esm["tensor4d"](extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
    var batch_norm_scale = tf_core_esm["tensor1d"](extractWeights(numChannels));
    var batch_norm_offset = tf_core_esm["tensor1d"](extractWeights(numChannels));
    var batch_norm_mean = tf_core_esm["tensor1d"](extractWeights(numChannels));
    var batch_norm_variance = tf_core_esm["tensor1d"](extractWeights(numChannels));
    paramMappings.push({
      paramPath: mappedPrefix + "/filters"
    }, {
      paramPath: mappedPrefix + "/batch_norm_scale"
    }, {
      paramPath: mappedPrefix + "/batch_norm_offset"
    }, {
      paramPath: mappedPrefix + "/batch_norm_mean"
    }, {
      paramPath: mappedPrefix + "/batch_norm_variance"
    });
    return {
      filters: filters,
      batch_norm_scale: batch_norm_scale,
      batch_norm_offset: batch_norm_offset,
      batch_norm_mean: batch_norm_mean,
      batch_norm_variance: batch_norm_variance
    };
  }

  function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
    var filters = tf_core_esm["tensor4d"](extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
    var bias = tf_core_esm["tensor1d"](extractWeights(channelsOut));
    paramMappings.push({
      paramPath: mappedPrefix + "/filters"
    }, {
      paramPath: mappedPrefix + "/" + (isPointwiseConv ? 'batch_norm_offset' : 'bias')
    });
    return {
      filters: filters,
      bias: bias
    };
  }

  function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
    var _a = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true),
        filters = _a.filters,
        bias = _a.bias;

    return {
      filters: filters,
      batch_norm_offset: bias
    };
  }

  function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
    var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
    var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
    return {
      depthwise_conv: depthwise_conv,
      pointwise_conv: pointwise_conv
    };
  }

  function extractMobilenetV1Params() {
    var conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0');
    var conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1');
    var conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2');
    var conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3');
    var conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4');
    var conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5');
    var conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6');
    var conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7');
    var conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8');
    var conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9');
    var conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10');
    var conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11');
    var conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12');
    var conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13');
    return {
      conv_0: conv_0,
      conv_1: conv_1,
      conv_2: conv_2,
      conv_3: conv_3,
      conv_4: conv_4,
      conv_5: conv_5,
      conv_6: conv_6,
      conv_7: conv_7,
      conv_8: conv_8,
      conv_9: conv_9,
      conv_10: conv_10,
      conv_11: conv_11,
      conv_12: conv_12,
      conv_13: conv_13
    };
  }

  function extractPredictionLayerParams() {
    var conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0');
    var conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1');
    var conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2');
    var conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3');
    var conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4');
    var conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5');
    var conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6');
    var conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7');
    var box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor');
    var class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor');
    var box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor');
    var class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor');
    var box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor');
    var class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor');
    var box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor');
    var class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor');
    var box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor');
    var class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor');
    var box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor');
    var class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor');
    var box_predictor_0 = {
      box_encoding_predictor: box_encoding_0_predictor,
      class_predictor: class_predictor_0
    };
    var box_predictor_1 = {
      box_encoding_predictor: box_encoding_1_predictor,
      class_predictor: class_predictor_1
    };
    var box_predictor_2 = {
      box_encoding_predictor: box_encoding_2_predictor,
      class_predictor: class_predictor_2
    };
    var box_predictor_3 = {
      box_encoding_predictor: box_encoding_3_predictor,
      class_predictor: class_predictor_3
    };
    var box_predictor_4 = {
      box_encoding_predictor: box_encoding_4_predictor,
      class_predictor: class_predictor_4
    };
    var box_predictor_5 = {
      box_encoding_predictor: box_encoding_5_predictor,
      class_predictor: class_predictor_5
    };
    return {
      conv_0: conv_0,
      conv_1: conv_1,
      conv_2: conv_2,
      conv_3: conv_3,
      conv_4: conv_4,
      conv_5: conv_5,
      conv_6: conv_6,
      conv_7: conv_7,
      box_predictor_0: box_predictor_0,
      box_predictor_1: box_predictor_1,
      box_predictor_2: box_predictor_2,
      box_predictor_3: box_predictor_3,
      box_predictor_4: box_predictor_4,
      box_predictor_5: box_predictor_5
    };
  }

  return {
    extractMobilenetV1Params: extractMobilenetV1Params,
    extractPredictionLayerParams: extractPredictionLayerParams
  };
}

function ssdMobilenetv1_extractParams_extractParams(weights) {
  var paramMappings = [];

  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var _b = ssdMobilenetv1_extractParams_extractorsFactory(extractWeights, paramMappings),
      extractMobilenetV1Params = _b.extractMobilenetV1Params,
      extractPredictionLayerParams = _b.extractPredictionLayerParams;

  var mobilenetv1 = extractMobilenetV1Params();
  var prediction_layer = extractPredictionLayerParams();
  var extra_dim = tf_core_esm["tensor3d"](extractWeights(5118 * 4), [1, 5118, 4]);
  var output_layer = {
    extra_dim: extra_dim
  };
  paramMappings.push({
    paramPath: 'output_layer/extra_dim'
  });

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  return {
    params: {
      mobilenetv1: mobilenetv1,
      prediction_layer: prediction_layer,
      output_layer: output_layer
    },
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/extractParamsFromWeigthMap.js


function ssdMobilenetv1_extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings) {
  var extractWeightEntry = Object(es6["v" /* extractWeightEntryFactory */])(weightMap, paramMappings);

  function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
    var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
    var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
    return {
      filters: filters,
      batch_norm_offset: batch_norm_offset
    };
  }

  function extractConvPairParams(idx) {
    var mappedPrefix = "mobilenetv1/conv_" + idx;
    var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
    var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
    var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
    var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
    var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
    var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
    var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
    var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
    return {
      depthwise_conv: {
        filters: filters,
        batch_norm_scale: batch_norm_scale,
        batch_norm_offset: batch_norm_offset,
        batch_norm_mean: batch_norm_mean,
        batch_norm_variance: batch_norm_variance
      },
      pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
    };
  }

  function extractMobilenetV1Params() {
    return {
      conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
      conv_1: extractConvPairParams(1),
      conv_2: extractConvPairParams(2),
      conv_3: extractConvPairParams(3),
      conv_4: extractConvPairParams(4),
      conv_5: extractConvPairParams(5),
      conv_6: extractConvPairParams(6),
      conv_7: extractConvPairParams(7),
      conv_8: extractConvPairParams(8),
      conv_9: extractConvPairParams(9),
      conv_10: extractConvPairParams(10),
      conv_11: extractConvPairParams(11),
      conv_12: extractConvPairParams(12),
      conv_13: extractConvPairParams(13)
    };
  }

  function extractConvParams(prefix, mappedPrefix) {
    var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
    var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
    return {
      filters: filters,
      bias: bias
    };
  }

  function extractBoxPredictorParams(idx) {
    var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
    var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
    return {
      box_encoding_predictor: box_encoding_predictor,
      class_predictor: class_predictor
    };
  }

  function extractPredictionLayerParams() {
    return {
      conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
      conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
      conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
      conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
      conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
      conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
      conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
      conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
      box_predictor_0: extractBoxPredictorParams(0),
      box_predictor_1: extractBoxPredictorParams(1),
      box_predictor_2: extractBoxPredictorParams(2),
      box_predictor_3: extractBoxPredictorParams(3),
      box_predictor_4: extractBoxPredictorParams(4),
      box_predictor_5: extractBoxPredictorParams(5)
    };
  }

  return {
    extractMobilenetV1Params: extractMobilenetV1Params,
    extractPredictionLayerParams: extractPredictionLayerParams
  };
}

function ssdMobilenetv1_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];

  var _a = ssdMobilenetv1_extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings),
      extractMobilenetV1Params = _a.extractMobilenetV1Params,
      extractPredictionLayerParams = _a.extractPredictionLayerParams;

  var extra_dim = weightMap['Output/extra_dim'];
  paramMappings.push({
    originalPath: 'Output/extra_dim',
    paramPath: 'output_layer/extra_dim'
  });

  if (!Object(es6["S" /* isTensor3D */])(extra_dim)) {
    throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
  }

  var params = {
    mobilenetv1: extractMobilenetV1Params(),
    prediction_layer: extractPredictionLayerParams(),
    output_layer: {
      extra_dim: extra_dim
    }
  };
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: params,
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/pointwiseConvLayer.js

function pointwiseConvLayer(x, params, strides) {
  return tf_core_esm["tidy"](function () {
    var out = tf_core_esm["conv2d"](x, params.filters, strides, 'same');
    out = tf_core_esm["add"](out, params.batch_norm_offset);
    return tf_core_esm["clipByValue"](out, 0, 6);
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/mobileNetV1.js



var epsilon = 0.0010000000474974513;

function depthwiseConvLayer(x, params, strides) {
  return tf_core_esm["tidy"](function () {
    var out = tf_core_esm["depthwiseConv2d"](x, params.filters, strides, 'same');
    out = tf_core_esm["batchNormalization"](out, params.batch_norm_mean, params.batch_norm_variance, epsilon, params.batch_norm_scale, params.batch_norm_offset);
    return tf_core_esm["clipByValue"](out, 0, 6);
  });
}

function getStridesForLayerIdx(layerIdx) {
  return [2, 4, 6, 12].some(function (idx) {
    return idx === layerIdx;
  }) ? [2, 2] : [1, 1];
}

function mobileNetV1(x, params) {
  return tf_core_esm["tidy"](function () {
    var conv11 = null;
    var out = pointwiseConvLayer(x, params.conv_0, [2, 2]);
    var convPairParams = [params.conv_1, params.conv_2, params.conv_3, params.conv_4, params.conv_5, params.conv_6, params.conv_7, params.conv_8, params.conv_9, params.conv_10, params.conv_11, params.conv_12, params.conv_13];
    convPairParams.forEach(function (param, i) {
      var layerIdx = i + 1;
      var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
      out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
      out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1]);

      if (layerIdx === 11) {
        conv11 = out;
      }
    });

    if (conv11 === null) {
      throw new Error('mobileNetV1 - output of conv layer 11 is null');
    }

    return {
      out: out,
      conv11: conv11
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/nonMaxSuppression.js


function nonMaxSuppression(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
  var numBoxes = boxes.shape[0];
  var outputSize = Math.min(maxOutputSize, numBoxes);
  var candidates = scores.map(function (score, boxIndex) {
    return {
      score: score,
      boxIndex: boxIndex
    };
  }).filter(function (c) {
    return c.score > scoreThreshold;
  }).sort(function (c1, c2) {
    return c2.score - c1.score;
  });

  var suppressFunc = function suppressFunc(x) {
    return x <= iouThreshold ? 1 : 0;
  };

  var selected = [];
  candidates.forEach(function (c) {
    if (selected.length >= outputSize) {
      return;
    }

    var originalScore = c.score;

    for (var j = selected.length - 1; j >= 0; --j) {
      var iou = IOU(boxes, c.boxIndex, selected[j]);

      if (iou === 0.0) {
        continue;
      }

      c.score *= suppressFunc(iou);

      if (c.score <= scoreThreshold) {
        break;
      }
    }

    if (originalScore === c.score) {
      selected.push(c.boxIndex);
    }
  });
  return selected;
}

function IOU(boxes, i, j) {
  var yminI = Math.min(boxes.get(i, 0), boxes.get(i, 2));
  var xminI = Math.min(boxes.get(i, 1), boxes.get(i, 3));
  var ymaxI = Math.max(boxes.get(i, 0), boxes.get(i, 2));
  var xmaxI = Math.max(boxes.get(i, 1), boxes.get(i, 3));
  var yminJ = Math.min(boxes.get(j, 0), boxes.get(j, 2));
  var xminJ = Math.min(boxes.get(j, 1), boxes.get(j, 3));
  var ymaxJ = Math.max(boxes.get(j, 0), boxes.get(j, 2));
  var xmaxJ = Math.max(boxes.get(j, 1), boxes.get(j, 3));
  var areaI = (ymaxI - yminI) * (xmaxI - xminI);
  var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);

  if (areaI <= 0 || areaJ <= 0) {
    return 0.0;
  }

  var intersectionYmin = Math.max(yminI, yminJ);
  var intersectionXmin = Math.max(xminI, xminJ);
  var intersectionYmax = Math.min(ymaxI, ymaxJ);
  var intersectionXmax = Math.min(xmaxI, xmaxJ);
  var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) * Math.max(intersectionXmax - intersectionXmin, 0.0);
  return intersectionArea / (areaI + areaJ - intersectionArea);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/outputLayer.js



function getCenterCoordinatesAndSizesLayer(x) {
  var vec = tf_core_esm["unstack"](tf_core_esm["transpose"](x, [1, 0]));
  var sizes = [tf_core_esm["sub"](vec[2], vec[0]), tf_core_esm["sub"](vec[3], vec[1])];
  var centers = [tf_core_esm["add"](vec[0], tf_core_esm["div"](sizes[0], tf_core_esm["scalar"](2))), tf_core_esm["add"](vec[1], tf_core_esm["div"](sizes[1], tf_core_esm["scalar"](2)))];
  return {
    sizes: sizes,
    centers: centers
  };
}

function decodeBoxesLayer(x0, x1) {
  var _a = getCenterCoordinatesAndSizesLayer(x0),
      sizes = _a.sizes,
      centers = _a.centers;

  var vec = tf_core_esm["unstack"](tf_core_esm["transpose"](x1, [1, 0]));
  var div0_out = tf_core_esm["div"](tf_core_esm["mul"](tf_core_esm["exp"](tf_core_esm["div"](vec[2], tf_core_esm["scalar"](5))), sizes[0]), tf_core_esm["scalar"](2));
  var add0_out = tf_core_esm["add"](tf_core_esm["mul"](tf_core_esm["div"](vec[0], tf_core_esm["scalar"](10)), sizes[0]), centers[0]);
  var div1_out = tf_core_esm["div"](tf_core_esm["mul"](tf_core_esm["exp"](tf_core_esm["div"](vec[3], tf_core_esm["scalar"](5))), sizes[1]), tf_core_esm["scalar"](2));
  var add1_out = tf_core_esm["add"](tf_core_esm["mul"](tf_core_esm["div"](vec[1], tf_core_esm["scalar"](10)), sizes[1]), centers[1]);
  return tf_core_esm["transpose"](tf_core_esm["stack"]([tf_core_esm["sub"](add0_out, div0_out), tf_core_esm["sub"](add1_out, div1_out), tf_core_esm["add"](add0_out, div0_out), tf_core_esm["add"](add1_out, div1_out)]), [1, 0]);
}

function outputLayer(boxPredictions, classPredictions, params) {
  return tf_core_esm["tidy"](function () {
    var batchSize = boxPredictions.shape[0];
    var boxes = decodeBoxesLayer(tf_core_esm["reshape"](tf_core_esm["tile"](params.extra_dim, [batchSize, 1, 1]), [-1, 4]), tf_core_esm["reshape"](boxPredictions, [-1, 4]));
    boxes = tf_core_esm["reshape"](boxes, [batchSize, boxes.shape[0] / batchSize, 4]);
    var scoresAndClasses = tf_core_esm["sigmoid"](tf_core_esm["slice"](classPredictions, [0, 0, 1], [-1, -1, -1]));
    var scores = tf_core_esm["slice"](scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
    scores = tf_core_esm["reshape"](scores, [batchSize, scores.shape[1]]);
    var boxesByBatch = tf_core_esm["unstack"](boxes);
    var scoresByBatch = tf_core_esm["unstack"](scores);
    return {
      boxes: boxesByBatch,
      scores: scoresByBatch
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/boxPredictionLayer.js


function boxPredictionLayer(x, params) {
  return tf_core_esm["tidy"](function () {
    var batchSize = x.shape[0];
    var boxPredictionEncoding = tf_core_esm["reshape"](Object(build_es6["d" /* convLayer */])(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
    var classPrediction = tf_core_esm["reshape"](Object(build_es6["d" /* convLayer */])(x, params.class_predictor), [batchSize, -1, 3]);
    return {
      boxPredictionEncoding: boxPredictionEncoding,
      classPrediction: classPrediction
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/predictionLayer.js



function predictionLayer(x, conv11, params) {
  return tf_core_esm["tidy"](function () {
    var conv0 = pointwiseConvLayer(x, params.conv_0, [1, 1]);
    var conv1 = pointwiseConvLayer(conv0, params.conv_1, [2, 2]);
    var conv2 = pointwiseConvLayer(conv1, params.conv_2, [1, 1]);
    var conv3 = pointwiseConvLayer(conv2, params.conv_3, [2, 2]);
    var conv4 = pointwiseConvLayer(conv3, params.conv_4, [1, 1]);
    var conv5 = pointwiseConvLayer(conv4, params.conv_5, [2, 2]);
    var conv6 = pointwiseConvLayer(conv5, params.conv_6, [1, 1]);
    var conv7 = pointwiseConvLayer(conv6, params.conv_7, [2, 2]);
    var boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0);
    var boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1);
    var boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2);
    var boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3);
    var boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4);
    var boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5);
    var boxPredictions = tf_core_esm["concat"]([boxPrediction0.boxPredictionEncoding, boxPrediction1.boxPredictionEncoding, boxPrediction2.boxPredictionEncoding, boxPrediction3.boxPredictionEncoding, boxPrediction4.boxPredictionEncoding, boxPrediction5.boxPredictionEncoding], 1);
    var classPredictions = tf_core_esm["concat"]([boxPrediction0.classPrediction, boxPrediction1.classPrediction, boxPrediction2.classPrediction, boxPrediction3.classPrediction, boxPrediction4.classPrediction, boxPrediction5.classPrediction], 1);
    return {
      boxPredictions: boxPredictions,
      classPredictions: classPredictions
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js
var SsdMobilenetv1Options =
/** @class */
function () {
  function SsdMobilenetv1Options(_a) {
    var _b = _a === void 0 ? {} : _a,
        minConfidence = _b.minConfidence,
        maxResults = _b.maxResults;

    this._name = 'SsdMobilenetv1Options';
    this._minConfidence = minConfidence || 0.5;
    this._maxResults = maxResults || 100;

    if (typeof this._minConfidence !== 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) {
      throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
    }

    if (typeof this._maxResults !== 'number') {
      throw new Error(this._name + " - expected maxResults to be a number");
    }
  }

  Object.defineProperty(SsdMobilenetv1Options.prototype, "minConfidence", {
    get: function get() {
      return this._minConfidence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsdMobilenetv1Options.prototype, "maxResults", {
    get: function get() {
      return this._maxResults;
    },
    enumerable: true,
    configurable: true
  });
  return SsdMobilenetv1Options;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1.js













var SsdMobilenetv1_SsdMobilenetv1 =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](SsdMobilenetv1, _super);

  function SsdMobilenetv1() {
    return _super.call(this, 'SsdMobilenetv1') || this;
  }

  SsdMobilenetv1.prototype.forwardInput = function (input) {
    var params = this.params;

    if (!params) {
      throw new Error('SsdMobilenetv1 - load model before inference');
    }

    return tf_core_esm["tidy"](function () {
      var batchTensor = input.toBatchTensor(512, false).toFloat();
      var x = tf_core_esm["sub"](tf_core_esm["mul"](batchTensor, tf_core_esm["scalar"](0.007843137718737125)), tf_core_esm["scalar"](1));
      var features = mobileNetV1(x, params.mobilenetv1);

      var _a = predictionLayer(features.out, features.conv11, params.prediction_layer),
          boxPredictions = _a.boxPredictions,
          classPredictions = _a.classPredictions;

      return outputLayer(boxPredictions, classPredictions, params.output_layer);
    });
  };

  SsdMobilenetv1.prototype.forward = function (input) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent()])];
        }
      });
    });
  };

  SsdMobilenetv1.prototype.locateFaces = function (input, options) {
    if (options === void 0) {
      options = {};
    }

    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, results;

      return tslib_es6["d" /* __generator */](this, function (_e) {
        switch (_e.label) {
          case 0:
            _a = new SsdMobilenetv1Options(options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            netInput = _e.sent();
            _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
            boxes = _boxes[0];
            scores = _scores[0];

            for (i = 1; i < _boxes.length; i++) {
              _boxes[i].dispose();

              _scores[i].dispose();
            }

            _d = (_c = Array).from;
            return [4
            /*yield*/
            , scores.data()];

          case 2:
            scoresData = _d.apply(_c, [_e.sent()]);
            iouThreshold = 0.5;
            indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
            reshapedDims = netInput.getReshapedInputDimensions(0);
            inputSize = netInput.inputSize;
            padX = inputSize / reshapedDims.width;
            padY = inputSize / reshapedDims.height;
            results = indices.map(function (idx) {
              var _a = [Math.max(0, boxes.get(idx, 0)), Math.min(1.0, boxes.get(idx, 2))].map(function (val) {
                return val * padY;
              }),
                  top = _a[0],
                  bottom = _a[1];

              var _b = [Math.max(0, boxes.get(idx, 1)), Math.min(1.0, boxes.get(idx, 3))].map(function (val) {
                return val * padX;
              }),
                  left = _b[0],
                  right = _b[1];

              return new FaceDetection_FaceDetection(scoresData[idx], new es6["k" /* Rect */](left, top, right - left, bottom - top), {
                height: netInput.getInputHeight(0),
                width: netInput.getInputWidth(0)
              });
            });
            boxes.dispose();
            scores.dispose();
            return [2
            /*return*/
            , results];
        }
      });
    });
  };

  SsdMobilenetv1.prototype.getDefaultModelName = function () {
    return 'ssd_mobilenetv1_model';
  };

  SsdMobilenetv1.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return ssdMobilenetv1_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap);
  };

  SsdMobilenetv1.prototype.extractParams = function (weights) {
    return ssdMobilenetv1_extractParams_extractParams(weights);
  };

  return SsdMobilenetv1;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/ssdMobilenetv1/index.js




function createSsdMobilenetv1(weights) {
  var net = new SsdMobilenetv1_SsdMobilenetv1();
  net.extractWeights(weights);
  return net;
}
function createFaceDetectionNet(weights) {
  return createSsdMobilenetv1(weights);
} // alias for backward compatibily

var ssdMobilenetv1_FaceDetectionNet =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](FaceDetectionNet, _super);

  function FaceDetectionNet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return FaceDetectionNet;
}(SsdMobilenetv1_SsdMobilenetv1);


// CONCATENATED MODULE: ../face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js



var TinyFaceDetectorOptions_TinyFaceDetectorOptions =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](TinyFaceDetectorOptions, _super);

  function TinyFaceDetectorOptions() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._name = 'TinyFaceDetectorOptions';
    return _this;
  }

  return TinyFaceDetectorOptions;
}(build_es6["c" /* TinyYolov2Options */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/ComposableTask.js


var ComposableTask_ComposableTask =
/** @class */
function () {
  function ComposableTask() {}

  ComposableTask.prototype.then = function (onfulfilled) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = onfulfilled;
            return [4
            /*yield*/
            , this.run()];

          case 1:
            return [2
            /*return*/
            , _a.apply(void 0, [_b.sent()])];
        }
      });
    });
  };

  ComposableTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      return tslib_es6["d" /* __generator */](this, function (_a) {
        throw new Error('ComposableTask - run is not implemented');
      });
    });
  };

  return ComposableTask;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/bgrToRgbTensor.js

function bgrToRgbTensor(tensor) {
  return tf_core_esm["tidy"](function () {
    return tf_core_esm["stack"](tf_core_esm["unstack"](tensor, 3).reverse(), 3);
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/config.js
var CELL_STRIDE = 2;
var CELL_SIZE = 12;
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/extractParams.js





function mtcnn_extractParams_extractorsFactory(extractWeights, paramMappings) {
  var extractConvParams = Object(build_es6["e" /* extractConvParamsFactory */])(extractWeights, paramMappings);
  var extractFCParams = Object(build_es6["f" /* extractFCParamsFactory */])(extractWeights, paramMappings);

  function extractPReluParams(size, paramPath) {
    var alpha = tf_core_esm["tensor1d"](extractWeights(size));
    paramMappings.push({
      paramPath: paramPath
    });
    return alpha;
  }

  function extractSharedParams(numFilters, mappedPrefix, isRnet) {
    if (isRnet === void 0) {
      isRnet = false;
    }

    var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
    var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
    var conv2 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
    var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
    var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
    var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
    return {
      conv1: conv1,
      prelu1_alpha: prelu1_alpha,
      conv2: conv2,
      prelu2_alpha: prelu2_alpha,
      conv3: conv3,
      prelu3_alpha: prelu3_alpha
    };
  }

  function extractPNetParams() {
    var sharedParams = extractSharedParams([3, 10, 16, 32], 'pnet');
    var conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1');
    var conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      conv4_1: conv4_1,
      conv4_2: conv4_2
    });
  }

  function extractRNetParams() {
    var sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true);
    var fc1 = extractFCParams(576, 128, 'rnet/fc1');
    var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
    var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
    var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      fc1: fc1,
      prelu4_alpha: prelu4_alpha,
      fc2_1: fc2_1,
      fc2_2: fc2_2
    });
  }

  function extractONetParams() {
    var sharedParams = extractSharedParams([3, 32, 64, 64], 'onet');
    var conv4 = extractConvParams(64, 128, 2, 'onet/conv4');
    var prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha');
    var fc1 = extractFCParams(1152, 256, 'onet/fc1');
    var prelu5_alpha = extractPReluParams(256, 'onet/prelu5_alpha');
    var fc2_1 = extractFCParams(256, 2, 'onet/fc2_1');
    var fc2_2 = extractFCParams(256, 4, 'onet/fc2_2');
    var fc2_3 = extractFCParams(256, 10, 'onet/fc2_3');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      conv4: conv4,
      prelu4_alpha: prelu4_alpha,
      fc1: fc1,
      prelu5_alpha: prelu5_alpha,
      fc2_1: fc2_1,
      fc2_2: fc2_2,
      fc2_3: fc2_3
    });
  }

  return {
    extractPNetParams: extractPNetParams,
    extractRNetParams: extractRNetParams,
    extractONetParams: extractONetParams
  };
}

function mtcnn_extractParams_extractParams(weights) {
  var _a = Object(es6["w" /* extractWeightsFactory */])(weights),
      extractWeights = _a.extractWeights,
      getRemainingWeights = _a.getRemainingWeights;

  var paramMappings = [];

  var _b = mtcnn_extractParams_extractorsFactory(extractWeights, paramMappings),
      extractPNetParams = _b.extractPNetParams,
      extractRNetParams = _b.extractRNetParams,
      extractONetParams = _b.extractONetParams;

  var pnet = extractPNetParams();
  var rnet = extractRNetParams();
  var onet = extractONetParams();

  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }

  return {
    params: {
      pnet: pnet,
      rnet: rnet,
      onet: onet
    },
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/extractParamsFromWeigthMap.js



function mtcnn_extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings) {
  var extractWeightEntry = Object(es6["v" /* extractWeightEntryFactory */])(weightMap, paramMappings);

  function extractConvParams(prefix) {
    var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return {
      filters: filters,
      bias: bias
    };
  }

  function extractFCParams(prefix) {
    var weights = extractWeightEntry(prefix + "/weights", 2);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return {
      weights: weights,
      bias: bias
    };
  }

  function extractPReluParams(paramPath) {
    return extractWeightEntry(paramPath, 1);
  }

  function extractSharedParams(prefix) {
    var conv1 = extractConvParams(prefix + "/conv1");
    var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
    var conv2 = extractConvParams(prefix + "/conv2");
    var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
    var conv3 = extractConvParams(prefix + "/conv3");
    var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
    return {
      conv1: conv1,
      prelu1_alpha: prelu1_alpha,
      conv2: conv2,
      prelu2_alpha: prelu2_alpha,
      conv3: conv3,
      prelu3_alpha: prelu3_alpha
    };
  }

  function extractPNetParams() {
    var sharedParams = extractSharedParams('pnet');
    var conv4_1 = extractConvParams('pnet/conv4_1');
    var conv4_2 = extractConvParams('pnet/conv4_2');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      conv4_1: conv4_1,
      conv4_2: conv4_2
    });
  }

  function extractRNetParams() {
    var sharedParams = extractSharedParams('rnet');
    var fc1 = extractFCParams('rnet/fc1');
    var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
    var fc2_1 = extractFCParams('rnet/fc2_1');
    var fc2_2 = extractFCParams('rnet/fc2_2');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      fc1: fc1,
      prelu4_alpha: prelu4_alpha,
      fc2_1: fc2_1,
      fc2_2: fc2_2
    });
  }

  function extractONetParams() {
    var sharedParams = extractSharedParams('onet');
    var conv4 = extractConvParams('onet/conv4');
    var prelu4_alpha = extractPReluParams('onet/prelu4_alpha');
    var fc1 = extractFCParams('onet/fc1');
    var prelu5_alpha = extractPReluParams('onet/prelu5_alpha');
    var fc2_1 = extractFCParams('onet/fc2_1');
    var fc2_2 = extractFCParams('onet/fc2_2');
    var fc2_3 = extractFCParams('onet/fc2_3');
    return tslib_es6["a" /* __assign */]({}, sharedParams, {
      conv4: conv4,
      prelu4_alpha: prelu4_alpha,
      fc1: fc1,
      prelu5_alpha: prelu5_alpha,
      fc2_1: fc2_1,
      fc2_2: fc2_2,
      fc2_3: fc2_3
    });
  }

  return {
    extractPNetParams: extractPNetParams,
    extractRNetParams: extractRNetParams,
    extractONetParams: extractONetParams
  };
}

function mtcnn_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];

  var _a = mtcnn_extractParamsFromWeigthMap_extractorsFactory(weightMap, paramMappings),
      extractPNetParams = _a.extractPNetParams,
      extractRNetParams = _a.extractRNetParams,
      extractONetParams = _a.extractONetParams;

  var pnet = extractPNetParams();
  var rnet = extractRNetParams();
  var onet = extractONetParams();
  Object(es6["q" /* disposeUnusedWeightTensors */])(weightMap, paramMappings);
  return {
    params: {
      pnet: pnet,
      rnet: rnet,
      onet: onet
    },
    paramMappings: paramMappings
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/getSizesForScale.js
function getSizesForScale(scale, _a) {
  var height = _a[0],
      width = _a[1];
  return {
    height: Math.floor(height * scale),
    width: Math.floor(width * scale)
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/pyramidDown.js

function pyramidDown(minFaceSize, scaleFactor, dims) {
  var height = dims[0],
      width = dims[1];
  var m = CELL_SIZE / minFaceSize;
  var scales = [];
  var minLayer = Math.min(height, width) * m;
  var exp = 0;

  while (minLayer >= 12) {
    scales.push(m * Math.pow(scaleFactor, exp));
    minLayer = minLayer * scaleFactor;
    exp += 1;
  }

  return scales;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/MtcnnBox.js



var MtcnnBox_MtcnnBox =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](MtcnnBox, _super);

  function MtcnnBox(left, top, right, bottom) {
    return _super.call(this, {
      left: left,
      top: top,
      right: right,
      bottom: bottom
    }, true) || this;
  }

  return MtcnnBox;
}(es6["b" /* Box */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/normalize.js


function normalize(x) {
  return tf_core_esm["tidy"](function () {
    return tf_core_esm["mul"](tf_core_esm["sub"](x, tf_core_esm["scalar"](127.5)), tf_core_esm["scalar"](0.0078125));
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/prelu.js

function prelu(x, alpha) {
  return tf_core_esm["tidy"](function () {
    return tf_core_esm["add"](tf_core_esm["relu"](x), tf_core_esm["mul"](alpha, tf_core_esm["neg"](tf_core_esm["relu"](tf_core_esm["neg"](x)))));
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/sharedLayers.js



function sharedLayer(x, params, isPnet) {
  if (isPnet === void 0) {
    isPnet = false;
  }

  return tf_core_esm["tidy"](function () {
    var out = Object(build_es6["d" /* convLayer */])(x, params.conv1, 'valid');
    out = prelu(out, params.prelu1_alpha);
    out = tf_core_esm["maxPool"](out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
    out = Object(build_es6["d" /* convLayer */])(out, params.conv2, 'valid');
    out = prelu(out, params.prelu2_alpha);
    out = isPnet ? out : tf_core_esm["maxPool"](out, [3, 3], [2, 2], 'valid');
    out = Object(build_es6["d" /* convLayer */])(out, params.conv3, 'valid');
    out = prelu(out, params.prelu3_alpha);
    return out;
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/PNet.js




function PNet(x, params) {
  return tf_core_esm["tidy"](function () {
    var out = sharedLayer(x, params, true);
    var conv = Object(build_es6["d" /* convLayer */])(out, params.conv4_1, 'valid');
    var max = tf_core_esm["expandDims"](tf_core_esm["max"](conv, 3), 3);
    var prob = tf_core_esm["softmax"](tf_core_esm["sub"](conv, max), 3);
    var regions = Object(build_es6["d" /* convLayer */])(out, params.conv4_2, 'valid');
    return {
      prob: prob,
      regions: regions
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/stage1.js








function rescaleAndNormalize(x, scale) {
  return tf_core_esm["tidy"](function () {
    var _a = getSizesForScale(scale, x.shape.slice(1)),
        height = _a.height,
        width = _a.width;

    var resized = tf_core_esm["image"].resizeBilinear(x, [height, width]);
    var normalized = normalize(resized);
    return tf_core_esm["transpose"](normalized, [0, 2, 1, 3]);
  });
}

function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
  // TODO: fix this!, maybe better to use tf.gather here
  var indices = [];

  for (var y = 0; y < scoresTensor.shape[0]; y++) {
    for (var x = 0; x < scoresTensor.shape[1]; x++) {
      if (scoresTensor.get(y, x) >= scoreThreshold) {
        indices.push(new es6["i" /* Point */](x, y));
      }
    }
  }

  var boundingBoxes = indices.map(function (idx) {
    var cell = new es6["a" /* BoundingBox */](Math.round((idx.y * CELL_STRIDE + 1) / scale), Math.round((idx.x * CELL_STRIDE + 1) / scale), Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale), Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale));
    var score = scoresTensor.get(idx.y, idx.x);
    var region = new MtcnnBox_MtcnnBox(regionsTensor.get(idx.y, idx.x, 0), regionsTensor.get(idx.y, idx.x, 1), regionsTensor.get(idx.y, idx.x, 2), regionsTensor.get(idx.y, idx.x, 3));
    return {
      cell: cell,
      score: score,
      region: region
    };
  });
  return boundingBoxes;
}

function stage1(imgTensor, scales, scoreThreshold, params, stats) {
  stats.stage1 = [];
  var pnetOutputs = scales.map(function (scale) {
    return tf_core_esm["tidy"](function () {
      var statsForScale = {
        scale: scale
      };
      var resized = rescaleAndNormalize(imgTensor, scale);
      var ts = Date.now();

      var _a = PNet(resized, params),
          prob = _a.prob,
          regions = _a.regions;

      statsForScale.pnet = Date.now() - ts;
      var scoresTensor = tf_core_esm["unstack"](tf_core_esm["unstack"](prob, 3)[1])[0];
      var regionsTensor = tf_core_esm["unstack"](regions)[0];
      return {
        scoresTensor: scoresTensor,
        regionsTensor: regionsTensor,
        scale: scale,
        statsForScale: statsForScale
      };
    });
  });
  var boxesForScale = pnetOutputs.map(function (_a) {
    var scoresTensor = _a.scoresTensor,
        regionsTensor = _a.regionsTensor,
        scale = _a.scale,
        statsForScale = _a.statsForScale;
    var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold);
    scoresTensor.dispose();
    regionsTensor.dispose();

    if (!boundingBoxes.length) {
      stats.stage1.push(statsForScale);
      return [];
    }

    var ts = Date.now();
    var indices = Object(es6["X" /* nonMaxSuppression */])(boundingBoxes.map(function (bbox) {
      return bbox.cell;
    }), boundingBoxes.map(function (bbox) {
      return bbox.score;
    }), 0.5);
    statsForScale.nms = Date.now() - ts;
    statsForScale.numBoxes = indices.length;
    stats.stage1.push(statsForScale);
    return indices.map(function (boxIdx) {
      return boundingBoxes[boxIdx];
    });
  });
  var allBoxes = boxesForScale.reduce(function (all, boxes) {
    return all.concat(boxes);
  }, []);
  var finalBoxes = [];
  var finalScores = [];

  if (allBoxes.length > 0) {
    var ts = Date.now();
    var indices = Object(es6["X" /* nonMaxSuppression */])(allBoxes.map(function (bbox) {
      return bbox.cell;
    }), allBoxes.map(function (bbox) {
      return bbox.score;
    }), 0.7);
    stats.stage1_nms = Date.now() - ts;
    finalScores = indices.map(function (idx) {
      return allBoxes[idx].score;
    });
    finalBoxes = indices.map(function (idx) {
      return allBoxes[idx];
    }).map(function (_a) {
      var cell = _a.cell,
          region = _a.region;
      return new es6["a" /* BoundingBox */](cell.left + region.left * cell.width, cell.top + region.top * cell.height, cell.right + region.right * cell.width, cell.bottom + region.bottom * cell.height).toSquare().round();
    });
  }

  return {
    boxes: finalBoxes,
    scores: finalScores
  };
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/extractImagePatches.js








function extractImagePatches(img, boxes, _a) {
  var width = _a.width,
      height = _a.height;
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    var _this = this;

    var imgCtx, bitmaps, imagePatchesDatas;
    return tslib_es6["d" /* __generator */](this, function (_b) {
      switch (_b.label) {
        case 0:
          imgCtx = Object(es6["C" /* getContext2dOrThrow */])(img);
          return [4
          /*yield*/
          , Promise.all(boxes.map(function (box) {
            return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
              var _a, y, ey, x, ex, fromX, fromY, imgData;

              return tslib_es6["d" /* __generator */](this, function (_b) {
                _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                fromX = x - 1;
                fromY = y - 1;
                imgData = imgCtx.getImageData(fromX, fromY, ex - fromX, ey - fromY);
                return [2
                /*return*/
                , es6["u" /* env */].isNodejs() ? Object(es6["p" /* createCanvasFromMedia */])(imgData) : createImageBitmap(imgData)];
              });
            });
          }))];

        case 1:
          bitmaps = _b.sent();
          imagePatchesDatas = [];
          bitmaps.forEach(function (bmp) {
            var patch = Object(es6["o" /* createCanvas */])({
              width: width,
              height: height
            });
            var patchCtx = Object(es6["C" /* getContext2dOrThrow */])(patch);
            patchCtx.drawImage(bmp, 0, 0, width, height);
            var data = patchCtx.getImageData(0, 0, width, height).data;
            var currData = []; // RGBA -> BGR

            for (var i = 0; i < data.length; i += 4) {
              currData.push(data[i + 2]);
              currData.push(data[i + 1]);
              currData.push(data[i]);
            }

            imagePatchesDatas.push(currData);
          });
          return [2
          /*return*/
          , imagePatchesDatas.map(function (data) {
            var t = tf_core_esm["tidy"](function () {
              var imagePatchTensor = tf_core_esm["transpose"](tf_core_esm["tensor4d"](data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
              return normalize(imagePatchTensor);
            });
            return t;
          })];
      }
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/RNet.js





function RNet(x, params) {
  return tf_core_esm["tidy"](function () {
    var convOut = sharedLayer(x, params);
    var vectorized = tf_core_esm["reshape"](convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
    var fc1 = fullyConnectedLayer(vectorized, params.fc1);
    var prelu4 = prelu(fc1, params.prelu4_alpha);
    var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
    var max = tf_core_esm["expandDims"](tf_core_esm["max"](fc2_1, 1), 1);
    var prob = tf_core_esm["softmax"](tf_core_esm["sub"](fc2_1, max), 1);
    var regions = fullyConnectedLayer(prelu4, params.fc2_2);
    var scores = tf_core_esm["unstack"](prob, 1)[1];
    return {
      scores: scores,
      regions: regions
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/stage2.js







function stage2(img, inputBoxes, scoreThreshold, params, stats) {
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;

    return tslib_es6["d" /* __generator */](this, function (_c) {
      switch (_c.label) {
        case 0:
          ts = Date.now();
          return [4
          /*yield*/
          , extractImagePatches(img, inputBoxes, {
            width: 24,
            height: 24
          })];

        case 1:
          rnetInputs = _c.sent();
          stats.stage2_extractImagePatches = Date.now() - ts;
          ts = Date.now();
          rnetOuts = rnetInputs.map(function (rnetInput) {
            var out = RNet(rnetInput, params);
            rnetInput.dispose();
            return out;
          });
          stats.stage2_rnet = Date.now() - ts;
          scoresTensor = rnetOuts.length > 1 ? tf_core_esm["concat"](rnetOuts.map(function (out) {
            return out.scores;
          })) : rnetOuts[0].scores;
          _b = (_a = Array).from;
          return [4
          /*yield*/
          , scoresTensor.data()];

        case 2:
          scores = _b.apply(_a, [_c.sent()]);
          scoresTensor.dispose();
          indices = scores.map(function (score, idx) {
            return {
              score: score,
              idx: idx
            };
          }).filter(function (c) {
            return c.score > scoreThreshold;
          }).map(function (_a) {
            var idx = _a.idx;
            return idx;
          });
          filteredBoxes = indices.map(function (idx) {
            return inputBoxes[idx];
          });
          filteredScores = indices.map(function (idx) {
            return scores[idx];
          });
          finalBoxes = [];
          finalScores = [];

          if (filteredBoxes.length > 0) {
            ts = Date.now();
            indicesNms = Object(es6["X" /* nonMaxSuppression */])(filteredBoxes, filteredScores, 0.7);
            stats.stage2_nms = Date.now() - ts;
            regions_1 = indicesNms.map(function (idx) {
              return new MtcnnBox_MtcnnBox(rnetOuts[indices[idx]].regions.get(0, 0), rnetOuts[indices[idx]].regions.get(0, 1), rnetOuts[indices[idx]].regions.get(0, 2), rnetOuts[indices[idx]].regions.get(0, 3));
            });
            finalScores = indicesNms.map(function (idx) {
              return filteredScores[idx];
            });
            finalBoxes = indicesNms.map(function (idx, i) {
              return filteredBoxes[idx].calibrate(regions_1[i]);
            });
          }

          rnetOuts.forEach(function (t) {
            t.regions.dispose();
            t.scores.dispose();
          });
          return [2
          /*return*/
          , {
            boxes: finalBoxes,
            scores: finalScores
          }];
      }
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/ONet.js






function ONet(x, params) {
  return tf_core_esm["tidy"](function () {
    var out = sharedLayer(x, params);
    out = tf_core_esm["maxPool"](out, [2, 2], [2, 2], 'same');
    out = Object(build_es6["d" /* convLayer */])(out, params.conv4, 'valid');
    out = prelu(out, params.prelu4_alpha);
    var vectorized = tf_core_esm["reshape"](out, [out.shape[0], params.fc1.weights.shape[0]]);
    var fc1 = fullyConnectedLayer(vectorized, params.fc1);
    var prelu5 = prelu(fc1, params.prelu5_alpha);
    var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
    var max = tf_core_esm["expandDims"](tf_core_esm["max"](fc2_1, 1), 1);
    var prob = tf_core_esm["softmax"](tf_core_esm["sub"](fc2_1, max), 1);
    var regions = fullyConnectedLayer(prelu5, params.fc2_2);
    var points = fullyConnectedLayer(prelu5, params.fc2_3);
    var scores = tf_core_esm["unstack"](prob, 1)[1];
    return {
      scores: scores,
      regions: regions,
      points: points
    };
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/stage3.js








function stage3(img, inputBoxes, scoreThreshold, params, stats) {
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;

    return tslib_es6["d" /* __generator */](this, function (_c) {
      switch (_c.label) {
        case 0:
          ts = Date.now();
          return [4
          /*yield*/
          , extractImagePatches(img, inputBoxes, {
            width: 48,
            height: 48
          })];

        case 1:
          onetInputs = _c.sent();
          stats.stage3_extractImagePatches = Date.now() - ts;
          ts = Date.now();
          onetOuts = onetInputs.map(function (onetInput) {
            var out = ONet(onetInput, params);
            onetInput.dispose();
            return out;
          });
          stats.stage3_onet = Date.now() - ts;
          scoresTensor = onetOuts.length > 1 ? tf_core_esm["concat"](onetOuts.map(function (out) {
            return out.scores;
          })) : onetOuts[0].scores;
          _b = (_a = Array).from;
          return [4
          /*yield*/
          , scoresTensor.data()];

        case 2:
          scores = _b.apply(_a, [_c.sent()]);
          scoresTensor.dispose();
          indices = scores.map(function (score, idx) {
            return {
              score: score,
              idx: idx
            };
          }).filter(function (c) {
            return c.score > scoreThreshold;
          }).map(function (_a) {
            var idx = _a.idx;
            return idx;
          });
          filteredRegions = indices.map(function (idx) {
            return new MtcnnBox_MtcnnBox(onetOuts[idx].regions.get(0, 0), onetOuts[idx].regions.get(0, 1), onetOuts[idx].regions.get(0, 2), onetOuts[idx].regions.get(0, 3));
          });
          filteredBoxes = indices.map(function (idx, i) {
            return inputBoxes[idx].calibrate(filteredRegions[i]);
          });
          filteredScores = indices.map(function (idx) {
            return scores[idx];
          });
          finalBoxes = [];
          finalScores = [];
          points = [];

          if (filteredBoxes.length > 0) {
            ts = Date.now();
            indicesNms = Object(es6["X" /* nonMaxSuppression */])(filteredBoxes, filteredScores, 0.7, false);
            stats.stage3_nms = Date.now() - ts;
            finalBoxes = indicesNms.map(function (idx) {
              return filteredBoxes[idx];
            });
            finalScores = indicesNms.map(function (idx) {
              return filteredScores[idx];
            });
            points = indicesNms.map(function (idx, i) {
              return Array(5).fill(0).map(function (_, ptIdx) {
                return new es6["i" /* Point */](onetOuts[idx].points.get(0, ptIdx) * (finalBoxes[i].width + 1) + finalBoxes[i].left, onetOuts[idx].points.get(0, ptIdx + 5) * (finalBoxes[i].height + 1) + finalBoxes[i].top);
              });
            });
          }

          onetOuts.forEach(function (t) {
            t.regions.dispose();
            t.scores.dispose();
            t.points.dispose();
          });
          return [2
          /*return*/
          , {
            boxes: finalBoxes,
            scores: finalScores,
            points: points
          }];
      }
    });
  });
}
// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/Mtcnn.js


















var Mtcnn_Mtcnn =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](Mtcnn, _super);

  function Mtcnn() {
    return _super.call(this, 'Mtcnn') || this;
  }

  Mtcnn.prototype.forwardInput = function (input, forwardParams) {
    if (forwardParams === void 0) {
      forwardParams = {};
    }

    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;

      return tslib_es6["d" /* __generator */](this, function (_c) {
        switch (_c.label) {
          case 0:
            params = this.params;

            if (!params) {
              throw new Error('Mtcnn - load model before inference');
            }

            inputCanvas = input.canvases[0];

            if (!inputCanvas) {
              throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
            }

            stats = {};
            tsTotal = Date.now();
            imgTensor = tf_core_esm["tidy"](function () {
              return bgrToRgbTensor(tf_core_esm["expandDims"](tf_core_esm["fromPixels"](inputCanvas)).toFloat());
            });

            onReturn = function onReturn(results) {
              // dispose tensors on return
              imgTensor.dispose();
              stats.total = Date.now() - tsTotal;
              return results;
            };

            _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
            _b = new MtcnnOptions(forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
            scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width])).filter(function (scale) {
              var sizes = getSizesForScale(scale, [height, width]);
              return Math.min(sizes.width, sizes.height) > CELL_SIZE;
            }).slice(0, maxNumScales);
            stats.scales = scales;
            stats.pyramid = scales.map(function (scale) {
              return getSizesForScale(scale, [height, width]);
            });
            ts = Date.now();
            return [4
            /*yield*/
            , stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];

          case 1:
            out1 = _c.sent();
            stats.total_stage1 = Date.now() - ts;

            if (!out1.boxes.length) {
              return [2
              /*return*/
              , onReturn({
                results: [],
                stats: stats
              })];
            }

            stats.stage2_numInputBoxes = out1.boxes.length; // using the inputCanvas to extract and resize the image patches, since it is faster
            // than doing this on the gpu

            ts = Date.now();
            return [4
            /*yield*/
            , stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];

          case 2:
            out2 = _c.sent();
            stats.total_stage2 = Date.now() - ts;

            if (!out2.boxes.length) {
              return [2
              /*return*/
              , onReturn({
                results: [],
                stats: stats
              })];
            }

            stats.stage3_numInputBoxes = out2.boxes.length;
            ts = Date.now();
            return [4
            /*yield*/
            , stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];

          case 3:
            out3 = _c.sent();
            stats.total_stage3 = Date.now() - ts;
            results = out3.boxes.map(function (box, idx) {
              return extendWithFaceLandmarks(extendWithFaceDetection({}, new FaceDetection_FaceDetection(out3.scores[idx], new es6["k" /* Rect */](box.left / width, box.top / height, box.width / width, box.height / height), {
                height: height,
                width: width
              })), new FaceLandmarks5_FaceLandmarks5(out3.points[idx].map(function (pt) {
                return pt.sub(new es6["i" /* Point */](box.left, box.top)).div(new es6["i" /* Point */](box.width, box.height));
              }), {
                width: box.width,
                height: box.height
              }));
            });
            return [2
            /*return*/
            , onReturn({
              results: results,
              stats: stats
            })];
        }
      });
    });
  };

  Mtcnn.prototype.forward = function (input, forwardParams) {
    if (forwardParams === void 0) {
      forwardParams = {};
    }

    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [4
            /*yield*/
            , _a.apply(this, [_b.sent(), forwardParams])];

          case 2:
            return [2
            /*return*/
            , _b.sent().results];
        }
      });
    });
  };

  Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
    if (forwardParams === void 0) {
      forwardParams = {};
    }

    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.forwardInput;
            return [4
            /*yield*/
            , Object(es6["fb" /* toNetInput */])(input)];

          case 1:
            return [2
            /*return*/
            , _a.apply(this, [_b.sent(), forwardParams])];
        }
      });
    });
  };

  Mtcnn.prototype.getDefaultModelName = function () {
    return 'mtcnn_model';
  };

  Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return mtcnn_extractParamsFromWeigthMap_extractParamsFromWeigthMap(weightMap);
  };

  Mtcnn.prototype.extractParams = function (weights) {
    return mtcnn_extractParams_extractParams(weights);
  };

  return Mtcnn;
}(es6["g" /* NeuralNetwork */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/tinyFaceDetector/const.js

var IOU_THRESHOLD = 0.4;
var BOX_ANCHORS = [new es6["i" /* Point */](1.603231, 2.094468), new es6["i" /* Point */](6.041143, 7.080126), new es6["i" /* Point */](2.882459, 3.518061), new es6["i" /* Point */](4.266906, 5.178857), new es6["i" /* Point */](9.041765, 10.66308)];
var MEAN_RGB = [117.001, 114.697, 97.404];
// CONCATENATED MODULE: ../face-api.js/build/es6/tinyFaceDetector/TinyFaceDetector.js





var TinyFaceDetector_TinyFaceDetector =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](TinyFaceDetector, _super);

  function TinyFaceDetector() {
    var _this = this;

    var config = {
      withSeparableConvs: true,
      iouThreshold: IOU_THRESHOLD,
      classes: ['face'],
      anchors: BOX_ANCHORS,
      meanRgb: MEAN_RGB,
      isFirstLayerConv2d: true,
      filterSizes: [3, 16, 32, 64, 128, 256, 512]
    };
    _this = _super.call(this, config) || this;
    return _this;
  }

  Object.defineProperty(TinyFaceDetector.prototype, "anchors", {
    get: function get() {
      return this.config.anchors;
    },
    enumerable: true,
    configurable: true
  });

  TinyFaceDetector.prototype.locateFaces = function (input, forwardParams) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var objectDetections;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.detect(input, forwardParams)];

          case 1:
            objectDetections = _a.sent();
            return [2
            /*return*/
            , objectDetections.map(function (det) {
              return new FaceDetection_FaceDetection(det.score, det.relativeBox, {
                width: det.imageWidth,
                height: det.imageHeight
              });
            })];
        }
      });
    });
  };

  TinyFaceDetector.prototype.getDefaultModelName = function () {
    return 'tiny_face_detector_model';
  };

  TinyFaceDetector.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
  };

  return TinyFaceDetector;
}(build_es6["b" /* TinyYolov2 */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/tinyYolov2/const.js

var const_IOU_THRESHOLD = 0.4;
var const_BOX_ANCHORS = [new es6["i" /* Point */](0.738768, 0.874946), new es6["i" /* Point */](2.42204, 2.65704), new es6["i" /* Point */](4.30971, 7.04493), new es6["i" /* Point */](10.246, 4.59428), new es6["i" /* Point */](12.6868, 11.8741)];
var BOX_ANCHORS_SEPARABLE = [new es6["i" /* Point */](1.603231, 2.094468), new es6["i" /* Point */](6.041143, 7.080126), new es6["i" /* Point */](2.882459, 3.518061), new es6["i" /* Point */](4.266906, 5.178857), new es6["i" /* Point */](9.041765, 10.66308)];
var MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';
// CONCATENATED MODULE: ../face-api.js/build/es6/tinyYolov2/TinyYolov2.js






var TinyYolov2_TinyYolov2 =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](TinyYolov2, _super);

  function TinyYolov2(withSeparableConvs) {
    if (withSeparableConvs === void 0) {
      withSeparableConvs = true;
    }

    var _this = this;

    var config = Object.assign({}, {
      withSeparableConvs: withSeparableConvs,
      iouThreshold: const_IOU_THRESHOLD,
      classes: ['face']
    }, withSeparableConvs ? {
      anchors: BOX_ANCHORS_SEPARABLE,
      meanRgb: MEAN_RGB_SEPARABLE
    } : {
      anchors: const_BOX_ANCHORS,
      withClassScores: true
    });
    _this = _super.call(this, config) || this;
    return _this;
  }

  Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
    get: function get() {
      return this.config.withSeparableConvs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TinyYolov2.prototype, "anchors", {
    get: function get() {
      return this.config.anchors;
    },
    enumerable: true,
    configurable: true
  });

  TinyYolov2.prototype.locateFaces = function (input, forwardParams) {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var objectDetections;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.detect(input, forwardParams)];

          case 1:
            objectDetections = _a.sent();
            return [2
            /*return*/
            , objectDetections.map(function (det) {
              return new FaceDetection_FaceDetection(det.score, det.relativeBox, {
                width: det.imageWidth,
                height: det.imageHeight
              });
            })];
        }
      });
    });
  };

  TinyYolov2.prototype.getDefaultModelName = function () {
    return this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME;
  };

  TinyYolov2.prototype.extractParamsFromWeigthMap = function (weightMap) {
    return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
  };

  return TinyYolov2;
}(build_es6["b" /* TinyYolov2 */]);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/nets.js








var nets = {
  ssdMobilenetv1: new SsdMobilenetv1_SsdMobilenetv1(),
  tinyFaceDetector: new TinyFaceDetector_TinyFaceDetector(),
  tinyYolov2: new TinyYolov2_TinyYolov2(),
  mtcnn: new Mtcnn_Mtcnn(),
  faceLandmark68Net: new FaceLandmark68Net_FaceLandmark68Net(),
  faceLandmark68TinyNet: new FaceLandmark68TinyNet_FaceLandmark68TinyNet(),
  faceRecognitionNet: new FaceRecognitionNet_FaceRecognitionNet(),
  faceExpressionNet: new FaceExpressionNet_FaceExpressionNet()
};
/**
 * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */

var ssdMobilenetv1 = function ssdMobilenetv1(input, options) {
  return nets.ssdMobilenetv1.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Face Detector.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
 * @returns Bounding box of each face with score.
 */

var tinyFaceDetector = function tinyFaceDetector(input, options) {
  return nets.tinyFaceDetector.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */

var tinyYolov2 = function tinyYolov2(input, options) {
  return nets.tinyYolov2.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image and the 5 point face landmarks
 * of each detected face using the MTCNN Network.
 *
 * @param input The input image.
 * @param options (optional, default: see MtcnnOptions constructor for default parameters).
 * @returns Bounding box of each face with score and 5 point face landmarks.
 */

var mtcnn = function mtcnn(input, options) {
  return nets.mtcnn.forward(input, options);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */

var detectFaceLandmarks = function detectFaceLandmarks(input) {
  return nets.faceLandmark68Net.detectLandmarks(input);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image
 * using a tinier version of the 68 point face landmark model, which is slightly
 * faster at inference, but also slightly less accurate.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */

var detectFaceLandmarksTiny = function detectFaceLandmarksTiny(input) {
  return nets.faceLandmark68TinyNet.detectLandmarks(input);
};
/**
 * Computes a 128 entry vector (face descriptor / face embeddings) from the face shown in an image,
 * which uniquely represents the features of that persons face. The computed face descriptor can
 * be used to measure the similarity between faces, by computing the euclidean distance of two
 * face descriptors.
 *
 * @param inputs The face image extracted from the aligned bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Face descriptor with 128 entries or array thereof in case of batch input.
 */

var computeFaceDescriptor = function computeFaceDescriptor(input) {
  return nets.faceRecognitionNet.computeFaceDescriptor(input);
};
/**
 * Recognizes the facial expressions of a face and returns the likelyhood of
 * each facial expression.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns An array of facial expressions with corresponding probabilities or array thereof in case of batch input.
 */

var recognizeFaceExpressions = function recognizeFaceExpressions(input) {
  return nets.faceExpressionNet.predictExpressions(input);
};
var loadSsdMobilenetv1Model = function loadSsdMobilenetv1Model(url) {
  return nets.ssdMobilenetv1.load(url);
};
var loadTinyFaceDetectorModel = function loadTinyFaceDetectorModel(url) {
  return nets.tinyFaceDetector.load(url);
};
var loadMtcnnModel = function loadMtcnnModel(url) {
  return nets.mtcnn.load(url);
};
var loadTinyYolov2Model = function loadTinyYolov2Model(url) {
  return nets.tinyYolov2.load(url);
};
var loadFaceLandmarkModel = function loadFaceLandmarkModel(url) {
  return nets.faceLandmark68Net.load(url);
};
var loadFaceLandmarkTinyModel = function loadFaceLandmarkTinyModel(url) {
  return nets.faceLandmark68TinyNet.load(url);
};
var loadFaceRecognitionModel = function loadFaceRecognitionModel(url) {
  return nets.faceRecognitionNet.load(url);
};
var loadFaceExpressionModel = function loadFaceExpressionModel(url) {
  return nets.faceExpressionNet.load(url);
}; // backward compatibility

var loadFaceDetectionModel = loadSsdMobilenetv1Model;
var locateFaces = ssdMobilenetv1;
var detectLandmarks = detectFaceLandmarks;
// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js











var ComputeFaceDescriptorsTasks_ComputeFaceDescriptorsTaskBase =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](ComputeFaceDescriptorsTaskBase, _super);

  function ComputeFaceDescriptorsTaskBase(parentTask, input) {
    var _this = _super.call(this) || this;

    _this.parentTask = parentTask;
    _this.input = input;
    return _this;
  }

  return ComputeFaceDescriptorsTaskBase;
}(ComposableTask_ComposableTask);



var ComputeFaceDescriptorsTasks_ComputeAllFaceDescriptorsTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](ComputeAllFaceDescriptorsTask, _super);

  function ComputeAllFaceDescriptorsTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ComputeAllFaceDescriptorsTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _this = this;

      var parentResults, alignedRects, alignedFaces, _a, results;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResults = _b.sent();
            alignedRects = parentResults.map(function (_a) {
              var alignedRect = _a.alignedRect;
              return alignedRect;
            });
            if (!(this.input instanceof tf_core_esm["Tensor"])) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, alignedRects)];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, alignedRects)];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            alignedFaces = _a;
            return [4
            /*yield*/
            , Promise.all(parentResults.map(function (parentResult, i) {
              return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
                var descriptor;
                return tslib_es6["d" /* __generator */](this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[i])];

                    case 1:
                      descriptor = _a.sent();
                      return [2
                      /*return*/
                      , extendWithFaceDescriptor(parentResult, descriptor)];
                  }
                });
              });
            }))];

          case 6:
            results = _b.sent();
            alignedFaces.forEach(function (f) {
              return f instanceof tf_core_esm["Tensor"] && f.dispose();
            });
            return [2
            /*return*/
            , results];
        }
      });
    });
  };

  return ComputeAllFaceDescriptorsTask;
}(ComputeFaceDescriptorsTasks_ComputeFaceDescriptorsTaskBase);



var ComputeFaceDescriptorsTasks_ComputeSingleFaceDescriptorTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](ComputeSingleFaceDescriptorTask, _super);

  function ComputeSingleFaceDescriptorTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ComputeSingleFaceDescriptorTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var parentResult, alignedRect, alignedFaces, _a, descriptor;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResult = _b.sent();

            if (!parentResult) {
              return [2
              /*return*/
              ];
            }

            alignedRect = parentResult.alignedRect;
            if (!(this.input instanceof tf_core_esm["Tensor"])) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, [alignedRect])];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, [alignedRect])];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            alignedFaces = _a;
            return [4
            /*yield*/
            , nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[0])];

          case 6:
            descriptor = _b.sent();
            alignedFaces.forEach(function (f) {
              return f instanceof tf_core_esm["Tensor"] && f.dispose();
            });
            return [2
            /*return*/
            , extendWithFaceDescriptor(parentResult, descriptor)];
        }
      });
    });
  };

  return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTasks_ComputeFaceDescriptorsTaskBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/DetectFaceLandmarksTasks.js












var DetectFaceLandmarksTasks_DetectFaceLandmarksTaskBase =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectFaceLandmarksTaskBase, _super);

  function DetectFaceLandmarksTaskBase(parentTask, input, useTinyLandmarkNet) {
    var _this = _super.call(this) || this;

    _this.parentTask = parentTask;
    _this.input = input;
    _this.useTinyLandmarkNet = useTinyLandmarkNet;
    return _this;
  }

  Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
    get: function get() {
      return this.useTinyLandmarkNet ? nets.faceLandmark68TinyNet : nets.faceLandmark68Net;
    },
    enumerable: true,
    configurable: true
  });
  return DetectFaceLandmarksTaskBase;
}(ComposableTask_ComposableTask);



var DetectFaceLandmarksTasks_DetectAllFaceLandmarksTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectAllFaceLandmarksTask, _super);

  function DetectAllFaceLandmarksTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DetectAllFaceLandmarksTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _this = this;

      var parentResults, detections, faces, _a, faceLandmarksByFace;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResults = _b.sent();
            detections = parentResults.map(function (res) {
              return res.detection;
            });
            if (!(this.input instanceof tf_core_esm["Tensor"])) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, detections)];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, detections)];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            faces = _a;
            return [4
            /*yield*/
            , Promise.all(faces.map(function (face) {
              return _this.landmarkNet.detectLandmarks(face);
            }))];

          case 6:
            faceLandmarksByFace = _b.sent();
            faces.forEach(function (f) {
              return f instanceof tf_core_esm["Tensor"] && f.dispose();
            });
            return [2
            /*return*/
            , parentResults.map(function (parentResult, i) {
              return extendWithFaceLandmarks(parentResult, faceLandmarksByFace[i]);
            })];
        }
      });
    });
  };

  DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
    return new ComputeFaceDescriptorsTasks_ComputeAllFaceDescriptorsTask(this, this.input);
  };

  return DetectAllFaceLandmarksTask;
}(DetectFaceLandmarksTasks_DetectFaceLandmarksTaskBase);



var DetectFaceLandmarksTasks_DetectSingleFaceLandmarksTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectSingleFaceLandmarksTask, _super);

  function DetectSingleFaceLandmarksTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DetectSingleFaceLandmarksTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var parentResult, detection, faces, _a, landmarks;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResult = _b.sent();

            if (!parentResult) {
              return [2
              /*return*/
              ];
            }

            detection = parentResult.detection;
            if (!(this.input instanceof tf_core_esm["Tensor"])) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, [detection])];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, [detection])];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            faces = _a;
            return [4
            /*yield*/
            , this.landmarkNet.detectLandmarks(faces[0])];

          case 6:
            landmarks = _b.sent();
            faces.forEach(function (f) {
              return f instanceof tf_core_esm["Tensor"] && f.dispose();
            });
            return [2
            /*return*/
            , extendWithFaceLandmarks(parentResult, landmarks)];
        }
      });
    });
  };

  DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
    return new ComputeFaceDescriptorsTasks_ComputeSingleFaceDescriptorTask(this, this.input);
  };

  return DetectSingleFaceLandmarksTask;
}(DetectFaceLandmarksTasks_DetectFaceLandmarksTaskBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js












var PredictFaceExpressionsTask_PredictFaceExpressionsTaskBase =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](PredictFaceExpressionsTaskBase, _super);

  function PredictFaceExpressionsTaskBase(parentTask, input) {
    var _this = _super.call(this) || this;

    _this.parentTask = parentTask;
    _this.input = input;
    return _this;
  }

  return PredictFaceExpressionsTaskBase;
}(ComposableTask_ComposableTask);



var PredictFaceExpressionsTask_PredictAllFaceExpressionsTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](PredictAllFaceExpressionsTask, _super);

  function PredictAllFaceExpressionsTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PredictAllFaceExpressionsTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var parentResults, detections, faces, _a, faceExpressionsByFace;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResults = _b.sent();
            detections = parentResults.map(function (parentResult) {
              return parentResult.detection;
            });
            if (!(this.input instanceof build_es6["g" /* tf */].Tensor)) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, detections)];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, detections)];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            faces = _a;
            return [4
            /*yield*/
            , Promise.all(faces.map(function (face) {
              return nets.faceExpressionNet.predictExpressions(face);
            }))];

          case 6:
            faceExpressionsByFace = _b.sent();
            faces.forEach(function (f) {
              return f instanceof build_es6["g" /* tf */].Tensor && f.dispose();
            });
            return [2
            /*return*/
            , parentResults.map(function (parentResult, i) {
              return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]);
            })];
        }
      });
    });
  };

  PredictAllFaceExpressionsTask.prototype.withFaceLandmarks = function () {
    return new DetectFaceLandmarksTasks_DetectAllFaceLandmarksTask(this, this.input, false);
  };

  return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTask_PredictFaceExpressionsTaskBase);



var PredictFaceExpressionsTask_PredictSingleFaceExpressionTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](PredictSingleFaceExpressionTask, _super);

  function PredictSingleFaceExpressionTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PredictSingleFaceExpressionTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var parentResult, detection, faces, _a, faceExpressions;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.parentTask];

          case 1:
            parentResult = _b.sent();

            if (!parentResult) {
              return [2
              /*return*/
              ];
            }

            detection = parentResult.detection;
            if (!(this.input instanceof build_es6["g" /* tf */].Tensor)) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , extractFaceTensors(this.input, [detection])];

          case 2:
            _a = _b.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , extractFaces(this.input, [detection])];

          case 4:
            _a = _b.sent();
            _b.label = 5;

          case 5:
            faces = _a;
            return [4
            /*yield*/
            , nets.faceExpressionNet.predictExpressions(faces[0])];

          case 6:
            faceExpressions = _b.sent();
            faces.forEach(function (f) {
              return f instanceof build_es6["g" /* tf */].Tensor && f.dispose();
            });
            return [2
            /*return*/
            , extendWithFaceExpressions(parentResult, faceExpressions)];
        }
      });
    });
  };

  PredictSingleFaceExpressionTask.prototype.withFaceLandmarks = function () {
    return new DetectFaceLandmarksTasks_DetectSingleFaceLandmarksTask(this, this.input, false);
  };

  return PredictSingleFaceExpressionTask;
}(PredictFaceExpressionsTask_PredictFaceExpressionsTaskBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/DetectFacesTasks.js













var DetectFacesTasks_DetectFacesTaskBase =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectFacesTaskBase, _super);

  function DetectFacesTaskBase(input, options) {
    if (options === void 0) {
      options = new SsdMobilenetv1Options();
    }

    var _this = _super.call(this) || this;

    _this.input = input;
    _this.options = options;
    return _this;
  }

  return DetectFacesTaskBase;
}(ComposableTask_ComposableTask);



var DetectFacesTasks_DetectAllFacesTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectAllFacesTask, _super);

  function DetectAllFacesTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DetectAllFacesTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var _a, input, options, faceDetectionFunction;

      return tslib_es6["d" /* __generator */](this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this, input = _a.input, options = _a.options;
            if (!(options instanceof MtcnnOptions)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , nets.mtcnn.forward(input, options)];

          case 1:
            return [2
            /*return*/
            , _b.sent().map(function (result) {
              return result.detection;
            })];

          case 2:
            faceDetectionFunction = options instanceof TinyFaceDetectorOptions_TinyFaceDetectorOptions ? function (input) {
              return nets.tinyFaceDetector.locateFaces(input, options);
            } : options instanceof SsdMobilenetv1Options ? function (input) {
              return nets.ssdMobilenetv1.locateFaces(input, options);
            } : options instanceof build_es6["c" /* TinyYolov2Options */] ? function (input) {
              return nets.tinyYolov2.locateFaces(input, options);
            } : null;

            if (!faceDetectionFunction) {
              throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
            }

            return [2
            /*return*/
            , faceDetectionFunction(input)];
        }
      });
    });
  };

  DetectAllFacesTask.prototype.runAndExtendWithFaceDetections = function () {
    var _this = this;

    return new Promise(function (res) {
      return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
        var detections;
        return tslib_es6["d" /* __generator */](this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.run()];

            case 1:
              detections = _a.sent();
              return [2
              /*return*/
              , res(detections.map(function (detection) {
                return extendWithFaceDetection({}, detection);
              }))];
          }
        });
      });
    });
  };

  DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
    if (useTinyLandmarkNet === void 0) {
      useTinyLandmarkNet = false;
    }

    return new DetectFaceLandmarksTasks_DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
  };

  DetectAllFacesTask.prototype.withFaceExpressions = function () {
    return new PredictFaceExpressionsTask_PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
  };

  return DetectAllFacesTask;
}(DetectFacesTasks_DetectFacesTaskBase);



var DetectFacesTasks_DetectSingleFaceTask =
/** @class */
function (_super) {
  tslib_es6["c" /* __extends */](DetectSingleFaceTask, _super);

  function DetectSingleFaceTask() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DetectSingleFaceTask.prototype.run = function () {
    return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
      var faceDetections, faceDetectionWithHighestScore;
      return tslib_es6["d" /* __generator */](this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , new DetectFacesTasks_DetectAllFacesTask(this.input, this.options)];

          case 1:
            faceDetections = _a.sent();
            faceDetectionWithHighestScore = faceDetections[0];
            faceDetections.forEach(function (faceDetection) {
              if (faceDetection.score > faceDetectionWithHighestScore.score) {
                faceDetectionWithHighestScore = faceDetection;
              }
            });
            return [2
            /*return*/
            , faceDetectionWithHighestScore];
        }
      });
    });
  };

  DetectSingleFaceTask.prototype.runAndExtendWithFaceDetection = function () {
    var _this = this;

    return new Promise(function (res) {
      return tslib_es6["b" /* __awaiter */](_this, void 0, void 0, function () {
        var detection;
        return tslib_es6["d" /* __generator */](this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.run()];

            case 1:
              detection = _a.sent();
              return [2
              /*return*/
              , res(detection ? extendWithFaceDetection({}, detection) : undefined)];
          }
        });
      });
    });
  };

  DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
    if (useTinyLandmarkNet === void 0) {
      useTinyLandmarkNet = false;
    }

    return new DetectFaceLandmarksTasks_DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
  };

  DetectSingleFaceTask.prototype.withFaceExpressions = function () {
    return new PredictFaceExpressionsTask_PredictSingleFaceExpressionTask(this.runAndExtendWithFaceDetection(), this.input);
  };

  return DetectSingleFaceTask;
}(DetectFacesTasks_DetectFacesTaskBase);


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/detectFaces.js


function detectSingleFace(input, options) {
  if (options === void 0) {
    options = new SsdMobilenetv1Options();
  }

  return new DetectFacesTasks_DetectSingleFaceTask(input, options);
}
function detectAllFaces(input, options) {
  if (options === void 0) {
    options = new SsdMobilenetv1Options();
  }

  return new DetectFacesTasks_DetectAllFacesTask(input, options);
}
// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/allFaces.js




 // export allFaces API for backward compatibility

function allFacesSsdMobilenetv1(input, minConfidence) {
  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    return tslib_es6["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? {
            minConfidence: minConfidence
          } : {})).withFaceLandmarks().withFaceDescriptors()];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
}
function allFacesTinyYolov2(input, forwardParams) {
  if (forwardParams === void 0) {
    forwardParams = {};
  }

  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    return tslib_es6["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , detectAllFaces(input, new build_es6["c" /* TinyYolov2Options */](forwardParams)).withFaceLandmarks().withFaceDescriptors()];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
}
function allFacesMtcnn(input, forwardParams) {
  if (forwardParams === void 0) {
    forwardParams = {};
  }

  return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
    return tslib_es6["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , detectAllFaces(input, new MtcnnOptions(forwardParams)).withFaceLandmarks().withFaceDescriptors()];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
}
var allFaces = allFacesSsdMobilenetv1;
// CONCATENATED MODULE: ../face-api.js/build/es6/euclideanDistance.js


function euclideanDistance(arr1, arr2) {
  if (arr1.length !== arr2.length) throw new Error('euclideanDistance: arr1.length !== arr2.length');
  var desc1 = Array.from(arr1);
  var desc2 = Array.from(arr2);
  return Math.sqrt(desc1.map(function (val, i) {
    return val - desc2[i];
  }).reduce(function (res, diff) {
    return res + Math.pow(diff, 2);
  }, 0));
}
// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/FaceMatcher.js





var FaceMatcher_FaceMatcher =
/** @class */
function () {
  function FaceMatcher(inputs, distanceThreshold) {
    if (distanceThreshold === void 0) {
      distanceThreshold = 0.6;
    }

    this._distanceThreshold = distanceThreshold;
    var inputArray = Array.isArray(inputs) ? inputs : [inputs];

    if (!inputArray.length) {
      throw new Error("FaceRecognizer.constructor - expected atleast one input");
    }

    var count = 1;

    var createUniqueLabel = function createUniqueLabel() {
      return "person " + count++;
    };

    this._labeledDescriptors = inputArray.map(function (desc) {
      if (desc instanceof LabeledFaceDescriptors) {
        return desc;
      }

      if (desc instanceof Float32Array) {
        return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
      }

      if (desc.descriptor && desc.descriptor instanceof Float32Array) {
        return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
      }

      throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
    });
  }

  Object.defineProperty(FaceMatcher.prototype, "labeledDescriptors", {
    get: function get() {
      return this._labeledDescriptors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FaceMatcher.prototype, "distanceThreshold", {
    get: function get() {
      return this._distanceThreshold;
    },
    enumerable: true,
    configurable: true
  });

  FaceMatcher.prototype.computeMeanDistance = function (queryDescriptor, descriptors) {
    return descriptors.map(function (d) {
      return euclideanDistance(d, queryDescriptor);
    }).reduce(function (d1, d2) {
      return d1 + d2;
    }, 0) / (descriptors.length || 1);
  };

  FaceMatcher.prototype.matchDescriptor = function (queryDescriptor) {
    var _this = this;

    return this.labeledDescriptors.map(function (_a) {
      var descriptors = _a.descriptors,
          label = _a.label;
      return new FaceMatch_FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
    }).reduce(function (best, curr) {
      return best.distance < curr.distance ? best : curr;
    });
  };

  FaceMatcher.prototype.findBestMatch = function (queryDescriptor) {
    var bestMatch = this.matchDescriptor(queryDescriptor);
    return bestMatch.distance < this.distanceThreshold ? bestMatch : new FaceMatch_FaceMatch('unknown', bestMatch.distance);
  };

  return FaceMatcher;
}();


// CONCATENATED MODULE: ../face-api.js/build/es6/globalApi/index.js








// CONCATENATED MODULE: ../face-api.js/build/es6/mtcnn/index.js



function createMtcnn(weights) {
  var net = new Mtcnn_Mtcnn();
  net.extractWeights(weights);
  return net;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/tinyFaceDetector/index.js



function createTinyFaceDetector(weights) {
  var net = new TinyFaceDetector_TinyFaceDetector();
  net.extractWeights(weights);
  return net;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/tinyYolov2/index.js


function createTinyYolov2(weights, withSeparableConvs) {
  if (withSeparableConvs === void 0) {
    withSeparableConvs = true;
  }

  var net = new TinyYolov2_TinyYolov2(withSeparableConvs);
  net.extractWeights(weights);
  return net;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/resizeResults.js




function resizeResults(results, _a) {
  var width = _a.width,
      height = _a.height;

  if (Array.isArray(results)) {
    return results.map(function (obj) {
      return resizeResults(obj, {
        width: width,
        height: height
      });
    });
  }

  var hasLandmarks = results['unshiftedLandmarks'] && results['unshiftedLandmarks'] instanceof FaceLandmarks_FaceLandmarks;
  var hasDetection = results['detection'] && results['detection'] instanceof FaceDetection_FaceDetection;

  if (hasLandmarks) {
    var resizedDetection = results['detection'].forSize(width, height);
    var resizedLandmarks = results['unshiftedLandmarks'].forSize(resizedDetection.box.width, resizedDetection.box.height);
    return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
  }

  if (hasDetection) {
    return extendWithFaceDetection(results, results['detection'].forSize(width, height));
  }

  if (results instanceof FaceLandmarks_FaceLandmarks || results instanceof FaceDetection_FaceDetection) {
    return results.forSize(width, height);
  }

  return results;
}
// CONCATENATED MODULE: ../face-api.js/build/es6/index.js
/* concated harmony reexport tf */__webpack_require__.d(__webpack_exports__, "tf", function() { return tf_core_esm; });
/* concated harmony reexport getModelUris */__webpack_require__.d(__webpack_exports__, "getModelUris", function() { return es6["F" /* getModelUris */]; });
/* concated harmony reexport env */__webpack_require__.d(__webpack_exports__, "env", function() { return es6["u" /* env */]; });
/* concated harmony reexport sigmoid */__webpack_require__.d(__webpack_exports__, "sigmoid", function() { return es6["eb" /* sigmoid */]; });
/* concated harmony reexport inverseSigmoid */__webpack_require__.d(__webpack_exports__, "inverseSigmoid", function() { return es6["I" /* inverseSigmoid */]; });
/* concated harmony reexport isTensor */__webpack_require__.d(__webpack_exports__, "isTensor", function() { return es6["P" /* isTensor */]; });
/* concated harmony reexport isTensor1D */__webpack_require__.d(__webpack_exports__, "isTensor1D", function() { return es6["Q" /* isTensor1D */]; });
/* concated harmony reexport isTensor2D */__webpack_require__.d(__webpack_exports__, "isTensor2D", function() { return es6["R" /* isTensor2D */]; });
/* concated harmony reexport isTensor3D */__webpack_require__.d(__webpack_exports__, "isTensor3D", function() { return es6["S" /* isTensor3D */]; });
/* concated harmony reexport isTensor4D */__webpack_require__.d(__webpack_exports__, "isTensor4D", function() { return es6["T" /* isTensor4D */]; });
/* concated harmony reexport isFloat */__webpack_require__.d(__webpack_exports__, "isFloat", function() { return es6["M" /* isFloat */]; });
/* concated harmony reexport isEven */__webpack_require__.d(__webpack_exports__, "isEven", function() { return es6["L" /* isEven */]; });
/* concated harmony reexport round */__webpack_require__.d(__webpack_exports__, "round", function() { return es6["cb" /* round */]; });
/* concated harmony reexport isDimensions */__webpack_require__.d(__webpack_exports__, "isDimensions", function() { return es6["K" /* isDimensions */]; });
/* concated harmony reexport computeReshapedDimensions */__webpack_require__.d(__webpack_exports__, "computeReshapedDimensions", function() { return es6["n" /* computeReshapedDimensions */]; });
/* concated harmony reexport getCenterPoint */__webpack_require__.d(__webpack_exports__, "getCenterPoint", function() { return es6["B" /* getCenterPoint */]; });
/* concated harmony reexport range */__webpack_require__.d(__webpack_exports__, "range", function() { return es6["ab" /* range */]; });
/* concated harmony reexport isValidNumber */__webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return es6["U" /* isValidNumber */]; });
/* concated harmony reexport isValidProbablitiy */__webpack_require__.d(__webpack_exports__, "isValidProbablitiy", function() { return es6["V" /* isValidProbablitiy */]; });
/* concated harmony reexport NeuralNetwork */__webpack_require__.d(__webpack_exports__, "NeuralNetwork", function() { return es6["g" /* NeuralNetwork */]; });
/* concated harmony reexport BoundingBox */__webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return es6["a" /* BoundingBox */]; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "Box", function() { return es6["b" /* Box */]; });
/* concated harmony reexport BoxWithText */__webpack_require__.d(__webpack_exports__, "BoxWithText", function() { return es6["c" /* BoxWithText */]; });
/* concated harmony reexport Dimensions */__webpack_require__.d(__webpack_exports__, "Dimensions", function() { return es6["d" /* Dimensions */]; });
/* concated harmony reexport LabeledBox */__webpack_require__.d(__webpack_exports__, "LabeledBox", function() { return es6["e" /* LabeledBox */]; });
/* concated harmony reexport ObjectDetection */__webpack_require__.d(__webpack_exports__, "ObjectDetection", function() { return es6["h" /* ObjectDetection */]; });
/* concated harmony reexport Point */__webpack_require__.d(__webpack_exports__, "Point", function() { return es6["i" /* Point */]; });
/* concated harmony reexport PredictedBox */__webpack_require__.d(__webpack_exports__, "PredictedBox", function() { return es6["j" /* PredictedBox */]; });
/* concated harmony reexport Rect */__webpack_require__.d(__webpack_exports__, "Rect", function() { return es6["k" /* Rect */]; });
/* concated harmony reexport disposeUnusedWeightTensors */__webpack_require__.d(__webpack_exports__, "disposeUnusedWeightTensors", function() { return es6["q" /* disposeUnusedWeightTensors */]; });
/* concated harmony reexport extractWeightEntryFactory */__webpack_require__.d(__webpack_exports__, "extractWeightEntryFactory", function() { return es6["v" /* extractWeightEntryFactory */]; });
/* concated harmony reexport extractWeightsFactory */__webpack_require__.d(__webpack_exports__, "extractWeightsFactory", function() { return es6["w" /* extractWeightsFactory */]; });
/* concated harmony reexport awaitMediaLoaded */__webpack_require__.d(__webpack_exports__, "awaitMediaLoaded", function() { return es6["l" /* awaitMediaLoaded */]; });
/* concated harmony reexport bufferToImage */__webpack_require__.d(__webpack_exports__, "bufferToImage", function() { return es6["m" /* bufferToImage */]; });
/* concated harmony reexport createCanvas */__webpack_require__.d(__webpack_exports__, "createCanvas", function() { return es6["o" /* createCanvas */]; });
/* concated harmony reexport createCanvasFromMedia */__webpack_require__.d(__webpack_exports__, "createCanvasFromMedia", function() { return es6["p" /* createCanvasFromMedia */]; });
/* concated harmony reexport drawBox */__webpack_require__.d(__webpack_exports__, "drawBox", function() { return es6["r" /* drawBox */]; });
/* concated harmony reexport drawDetection */__webpack_require__.d(__webpack_exports__, "drawDetection", function() { return es6["s" /* drawDetection */]; });
/* concated harmony reexport drawText */__webpack_require__.d(__webpack_exports__, "drawText", function() { return es6["t" /* drawText */]; });
/* concated harmony reexport fetchImage */__webpack_require__.d(__webpack_exports__, "fetchImage", function() { return es6["x" /* fetchImage */]; });
/* concated harmony reexport fetchJson */__webpack_require__.d(__webpack_exports__, "fetchJson", function() { return es6["y" /* fetchJson */]; });
/* concated harmony reexport fetchNetWeights */__webpack_require__.d(__webpack_exports__, "fetchNetWeights", function() { return es6["z" /* fetchNetWeights */]; });
/* concated harmony reexport fetchOrThrow */__webpack_require__.d(__webpack_exports__, "fetchOrThrow", function() { return es6["A" /* fetchOrThrow */]; });
/* concated harmony reexport getContext2dOrThrow */__webpack_require__.d(__webpack_exports__, "getContext2dOrThrow", function() { return es6["C" /* getContext2dOrThrow */]; });
/* concated harmony reexport getDefaultDrawOptions */__webpack_require__.d(__webpack_exports__, "getDefaultDrawOptions", function() { return es6["D" /* getDefaultDrawOptions */]; });
/* concated harmony reexport getMediaDimensions */__webpack_require__.d(__webpack_exports__, "getMediaDimensions", function() { return es6["E" /* getMediaDimensions */]; });
/* concated harmony reexport imageTensorToCanvas */__webpack_require__.d(__webpack_exports__, "imageTensorToCanvas", function() { return es6["G" /* imageTensorToCanvas */]; });
/* concated harmony reexport imageToSquare */__webpack_require__.d(__webpack_exports__, "imageToSquare", function() { return es6["H" /* imageToSquare */]; });
/* concated harmony reexport isMediaElement */__webpack_require__.d(__webpack_exports__, "isMediaElement", function() { return es6["N" /* isMediaElement */]; });
/* concated harmony reexport isMediaLoaded */__webpack_require__.d(__webpack_exports__, "isMediaLoaded", function() { return es6["O" /* isMediaLoaded */]; });
/* concated harmony reexport loadWeightMap */__webpack_require__.d(__webpack_exports__, "loadWeightMap", function() { return es6["W" /* loadWeightMap */]; });
/* concated harmony reexport NetInput */__webpack_require__.d(__webpack_exports__, "NetInput", function() { return es6["f" /* NetInput */]; });
/* concated harmony reexport resolveInput */__webpack_require__.d(__webpack_exports__, "resolveInput", function() { return es6["bb" /* resolveInput */]; });
/* concated harmony reexport toNetInput */__webpack_require__.d(__webpack_exports__, "toNetInput", function() { return es6["fb" /* toNetInput */]; });
/* concated harmony reexport iou */__webpack_require__.d(__webpack_exports__, "iou", function() { return es6["J" /* iou */]; });
/* concated harmony reexport nonMaxSuppression */__webpack_require__.d(__webpack_exports__, "nonMaxSuppression", function() { return es6["X" /* nonMaxSuppression */]; });
/* concated harmony reexport normalize */__webpack_require__.d(__webpack_exports__, "normalize", function() { return es6["Y" /* normalize */]; });
/* concated harmony reexport padToSquare */__webpack_require__.d(__webpack_exports__, "padToSquare", function() { return es6["Z" /* padToSquare */]; });
/* concated harmony reexport shuffleArray */__webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return es6["db" /* shuffleArray */]; });
/* concated harmony reexport FaceDetection */__webpack_require__.d(__webpack_exports__, "FaceDetection", function() { return FaceDetection_FaceDetection; });
/* concated harmony reexport FaceLandmarks */__webpack_require__.d(__webpack_exports__, "FaceLandmarks", function() { return FaceLandmarks_FaceLandmarks; });
/* concated harmony reexport FaceLandmarks5 */__webpack_require__.d(__webpack_exports__, "FaceLandmarks5", function() { return FaceLandmarks5_FaceLandmarks5; });
/* concated harmony reexport FaceLandmarks68 */__webpack_require__.d(__webpack_exports__, "FaceLandmarks68", function() { return FaceLandmarks68_FaceLandmarks68; });
/* concated harmony reexport FaceMatch */__webpack_require__.d(__webpack_exports__, "FaceMatch", function() { return FaceMatch_FaceMatch; });
/* concated harmony reexport LabeledFaceDescriptors */__webpack_require__.d(__webpack_exports__, "LabeledFaceDescriptors", function() { return LabeledFaceDescriptors; });
/* concated harmony reexport drawContour */__webpack_require__.d(__webpack_exports__, "drawContour", function() { return drawContour; });
/* concated harmony reexport drawLandmarks */__webpack_require__.d(__webpack_exports__, "drawLandmarks", function() { return drawLandmarks; });
/* concated harmony reexport drawFaceExpressions */__webpack_require__.d(__webpack_exports__, "drawFaceExpressions", function() { return drawFaceExpressions; });
/* concated harmony reexport extractFaces */__webpack_require__.d(__webpack_exports__, "extractFaces", function() { return extractFaces; });
/* concated harmony reexport extractFaceTensors */__webpack_require__.d(__webpack_exports__, "extractFaceTensors", function() { return extractFaceTensors; });
/* concated harmony reexport FaceExpressionNet */__webpack_require__.d(__webpack_exports__, "FaceExpressionNet", function() { return FaceExpressionNet_FaceExpressionNet; });
/* concated harmony reexport faceExpressionLabels */__webpack_require__.d(__webpack_exports__, "faceExpressionLabels", function() { return faceExpressionLabels; });
/* concated harmony reexport FaceLandmarkNet */__webpack_require__.d(__webpack_exports__, "FaceLandmarkNet", function() { return faceLandmarkNet_FaceLandmarkNet; });
/* concated harmony reexport FaceLandmark68Net */__webpack_require__.d(__webpack_exports__, "FaceLandmark68Net", function() { return FaceLandmark68Net_FaceLandmark68Net; });
/* concated harmony reexport FaceLandmark68TinyNet */__webpack_require__.d(__webpack_exports__, "FaceLandmark68TinyNet", function() { return FaceLandmark68TinyNet_FaceLandmark68TinyNet; });
/* concated harmony reexport createFaceRecognitionNet */__webpack_require__.d(__webpack_exports__, "createFaceRecognitionNet", function() { return createFaceRecognitionNet; });
/* concated harmony reexport FaceRecognitionNet */__webpack_require__.d(__webpack_exports__, "FaceRecognitionNet", function() { return FaceRecognitionNet_FaceRecognitionNet; });
/* concated harmony reexport extendWithFaceDescriptor */__webpack_require__.d(__webpack_exports__, "extendWithFaceDescriptor", function() { return extendWithFaceDescriptor; });
/* concated harmony reexport extendWithFaceDetection */__webpack_require__.d(__webpack_exports__, "extendWithFaceDetection", function() { return extendWithFaceDetection; });
/* concated harmony reexport extendWithFaceExpressions */__webpack_require__.d(__webpack_exports__, "extendWithFaceExpressions", function() { return extendWithFaceExpressions; });
/* concated harmony reexport extendWithFaceLandmarks */__webpack_require__.d(__webpack_exports__, "extendWithFaceLandmarks", function() { return extendWithFaceLandmarks; });
/* concated harmony reexport allFacesSsdMobilenetv1 */__webpack_require__.d(__webpack_exports__, "allFacesSsdMobilenetv1", function() { return allFacesSsdMobilenetv1; });
/* concated harmony reexport allFacesTinyYolov2 */__webpack_require__.d(__webpack_exports__, "allFacesTinyYolov2", function() { return allFacesTinyYolov2; });
/* concated harmony reexport allFacesMtcnn */__webpack_require__.d(__webpack_exports__, "allFacesMtcnn", function() { return allFacesMtcnn; });
/* concated harmony reexport allFaces */__webpack_require__.d(__webpack_exports__, "allFaces", function() { return allFaces; });
/* concated harmony reexport ComposableTask */__webpack_require__.d(__webpack_exports__, "ComposableTask", function() { return ComposableTask_ComposableTask; });
/* concated harmony reexport ComputeFaceDescriptorsTaskBase */__webpack_require__.d(__webpack_exports__, "ComputeFaceDescriptorsTaskBase", function() { return ComputeFaceDescriptorsTasks_ComputeFaceDescriptorsTaskBase; });
/* concated harmony reexport ComputeAllFaceDescriptorsTask */__webpack_require__.d(__webpack_exports__, "ComputeAllFaceDescriptorsTask", function() { return ComputeFaceDescriptorsTasks_ComputeAllFaceDescriptorsTask; });
/* concated harmony reexport ComputeSingleFaceDescriptorTask */__webpack_require__.d(__webpack_exports__, "ComputeSingleFaceDescriptorTask", function() { return ComputeFaceDescriptorsTasks_ComputeSingleFaceDescriptorTask; });
/* concated harmony reexport detectSingleFace */__webpack_require__.d(__webpack_exports__, "detectSingleFace", function() { return detectSingleFace; });
/* concated harmony reexport detectAllFaces */__webpack_require__.d(__webpack_exports__, "detectAllFaces", function() { return detectAllFaces; });
/* concated harmony reexport DetectFacesTaskBase */__webpack_require__.d(__webpack_exports__, "DetectFacesTaskBase", function() { return DetectFacesTasks_DetectFacesTaskBase; });
/* concated harmony reexport DetectAllFacesTask */__webpack_require__.d(__webpack_exports__, "DetectAllFacesTask", function() { return DetectFacesTasks_DetectAllFacesTask; });
/* concated harmony reexport DetectSingleFaceTask */__webpack_require__.d(__webpack_exports__, "DetectSingleFaceTask", function() { return DetectFacesTasks_DetectSingleFaceTask; });
/* concated harmony reexport DetectFaceLandmarksTaskBase */__webpack_require__.d(__webpack_exports__, "DetectFaceLandmarksTaskBase", function() { return DetectFaceLandmarksTasks_DetectFaceLandmarksTaskBase; });
/* concated harmony reexport DetectAllFaceLandmarksTask */__webpack_require__.d(__webpack_exports__, "DetectAllFaceLandmarksTask", function() { return DetectFaceLandmarksTasks_DetectAllFaceLandmarksTask; });
/* concated harmony reexport DetectSingleFaceLandmarksTask */__webpack_require__.d(__webpack_exports__, "DetectSingleFaceLandmarksTask", function() { return DetectFaceLandmarksTasks_DetectSingleFaceLandmarksTask; });
/* concated harmony reexport FaceMatcher */__webpack_require__.d(__webpack_exports__, "FaceMatcher", function() { return FaceMatcher_FaceMatcher; });
/* concated harmony reexport nets */__webpack_require__.d(__webpack_exports__, "nets", function() { return nets; });
/* concated harmony reexport ssdMobilenetv1 */__webpack_require__.d(__webpack_exports__, "ssdMobilenetv1", function() { return ssdMobilenetv1; });
/* concated harmony reexport tinyFaceDetector */__webpack_require__.d(__webpack_exports__, "tinyFaceDetector", function() { return tinyFaceDetector; });
/* concated harmony reexport tinyYolov2 */__webpack_require__.d(__webpack_exports__, "tinyYolov2", function() { return tinyYolov2; });
/* concated harmony reexport mtcnn */__webpack_require__.d(__webpack_exports__, "mtcnn", function() { return mtcnn; });
/* concated harmony reexport detectFaceLandmarks */__webpack_require__.d(__webpack_exports__, "detectFaceLandmarks", function() { return detectFaceLandmarks; });
/* concated harmony reexport detectFaceLandmarksTiny */__webpack_require__.d(__webpack_exports__, "detectFaceLandmarksTiny", function() { return detectFaceLandmarksTiny; });
/* concated harmony reexport computeFaceDescriptor */__webpack_require__.d(__webpack_exports__, "computeFaceDescriptor", function() { return computeFaceDescriptor; });
/* concated harmony reexport recognizeFaceExpressions */__webpack_require__.d(__webpack_exports__, "recognizeFaceExpressions", function() { return recognizeFaceExpressions; });
/* concated harmony reexport loadSsdMobilenetv1Model */__webpack_require__.d(__webpack_exports__, "loadSsdMobilenetv1Model", function() { return loadSsdMobilenetv1Model; });
/* concated harmony reexport loadTinyFaceDetectorModel */__webpack_require__.d(__webpack_exports__, "loadTinyFaceDetectorModel", function() { return loadTinyFaceDetectorModel; });
/* concated harmony reexport loadMtcnnModel */__webpack_require__.d(__webpack_exports__, "loadMtcnnModel", function() { return loadMtcnnModel; });
/* concated harmony reexport loadTinyYolov2Model */__webpack_require__.d(__webpack_exports__, "loadTinyYolov2Model", function() { return loadTinyYolov2Model; });
/* concated harmony reexport loadFaceLandmarkModel */__webpack_require__.d(__webpack_exports__, "loadFaceLandmarkModel", function() { return loadFaceLandmarkModel; });
/* concated harmony reexport loadFaceLandmarkTinyModel */__webpack_require__.d(__webpack_exports__, "loadFaceLandmarkTinyModel", function() { return loadFaceLandmarkTinyModel; });
/* concated harmony reexport loadFaceRecognitionModel */__webpack_require__.d(__webpack_exports__, "loadFaceRecognitionModel", function() { return loadFaceRecognitionModel; });
/* concated harmony reexport loadFaceExpressionModel */__webpack_require__.d(__webpack_exports__, "loadFaceExpressionModel", function() { return loadFaceExpressionModel; });
/* concated harmony reexport loadFaceDetectionModel */__webpack_require__.d(__webpack_exports__, "loadFaceDetectionModel", function() { return loadFaceDetectionModel; });
/* concated harmony reexport locateFaces */__webpack_require__.d(__webpack_exports__, "locateFaces", function() { return locateFaces; });
/* concated harmony reexport detectLandmarks */__webpack_require__.d(__webpack_exports__, "detectLandmarks", function() { return detectLandmarks; });
/* concated harmony reexport createMtcnn */__webpack_require__.d(__webpack_exports__, "createMtcnn", function() { return createMtcnn; });
/* concated harmony reexport Mtcnn */__webpack_require__.d(__webpack_exports__, "Mtcnn", function() { return Mtcnn_Mtcnn; });
/* concated harmony reexport MtcnnOptions */__webpack_require__.d(__webpack_exports__, "MtcnnOptions", function() { return MtcnnOptions; });
/* concated harmony reexport createSsdMobilenetv1 */__webpack_require__.d(__webpack_exports__, "createSsdMobilenetv1", function() { return createSsdMobilenetv1; });
/* concated harmony reexport createFaceDetectionNet */__webpack_require__.d(__webpack_exports__, "createFaceDetectionNet", function() { return createFaceDetectionNet; });
/* concated harmony reexport FaceDetectionNet */__webpack_require__.d(__webpack_exports__, "FaceDetectionNet", function() { return ssdMobilenetv1_FaceDetectionNet; });
/* concated harmony reexport SsdMobilenetv1 */__webpack_require__.d(__webpack_exports__, "SsdMobilenetv1", function() { return SsdMobilenetv1_SsdMobilenetv1; });
/* concated harmony reexport SsdMobilenetv1Options */__webpack_require__.d(__webpack_exports__, "SsdMobilenetv1Options", function() { return SsdMobilenetv1Options; });
/* concated harmony reexport createTinyFaceDetector */__webpack_require__.d(__webpack_exports__, "createTinyFaceDetector", function() { return createTinyFaceDetector; });
/* concated harmony reexport TinyFaceDetector */__webpack_require__.d(__webpack_exports__, "TinyFaceDetector", function() { return TinyFaceDetector_TinyFaceDetector; });
/* concated harmony reexport TinyFaceDetectorOptions */__webpack_require__.d(__webpack_exports__, "TinyFaceDetectorOptions", function() { return TinyFaceDetectorOptions_TinyFaceDetectorOptions; });
/* concated harmony reexport createTinyYolov2 */__webpack_require__.d(__webpack_exports__, "createTinyYolov2", function() { return createTinyYolov2; });
/* concated harmony reexport TinyYolov2 */__webpack_require__.d(__webpack_exports__, "TinyYolov2", function() { return TinyYolov2_TinyYolov2; });
/* concated harmony reexport euclideanDistance */__webpack_require__.d(__webpack_exports__, "euclideanDistance", function() { return euclideanDistance; });
/* concated harmony reexport resizeResults */__webpack_require__.d(__webpack_exports__, "resizeResults", function() { return resizeResults; });

















/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayResults", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWithOverlay", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayResults", function() { return _displayResults__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _facc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(367);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComputeFaceDescriptors", function() { return _facc__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadModels", function() { return _facc__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAsyncRendering", function() { return _hoc__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _MediaElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaElement", function() { return _MediaElement__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _shallowEquals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(243);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEquals", function() { return _shallowEquals__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(325);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);

var CenterContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "CenterContent",
  componentId: "sc-1fd82k2-0"
})(["display:flex;align-items:", ";justify-content:center;flex-direction:", ";flex-wrap:wrap;"], function (props) {
  return props.alignItems || 'center';
}, function (props) {
  return props.flexDirection || 'row';
});

/***/ }),

/***/ 159:
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
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBySide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);

var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "SideBySide",
  componentId: "sc-1l438wy-0"
})(["display:flex;flex-direction:row;align-items:center;"]);

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAsyncRendering; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shallowEquals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(243);








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

/***/ 184:
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
var index_es = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(366);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(158);

// EXTERNAL MODULE: ./src/styled/CenterContent.tsx
var CenterContent = __webpack_require__(155);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(177);
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





var getPageContext = __webpack_require__(672).default;

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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayResults; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(226);




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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayResults; });
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);


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
  var withBoxes = options.withBoxes,
      _options$withScore = options.withScore,
      withScore = _options$withScore === void 0 ? true : _options$withScore,
      _options$drawLines = options.drawLines,
      drawLines = _options$drawLines === void 0 ? true : _options$drawLines;

  if (!results || !results.length) {
    return;
  }

  var resizedResults = results.map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"] ? res : res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceLandmarks68"] ? res.forSize(overlay.width, overlay.height) : res.forSize(overlay.width, overlay.height);
  });
  var detections = resizedResults.filter(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["ObjectDetection"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceDetectionWithLandmarks"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"];
  }).map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["ObjectDetection"] ? res : res.detection;
  });
  var drawDetectionsOptions = {
    withScore: withScore,
    textColor: 'red',
    fontSize: 16
  };
  var faceLandmarks = resizedResults.filter(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceLandmarks68"] || res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceDetectionWithLandmarks"];
  }).map(function (res) {
    return res instanceof face_api_js__WEBPACK_IMPORTED_MODULE_0__["FaceLandmarks68"] ? res : res.landmarks;
  });
  var drawLandmarksOptions = {
    drawLines: drawLines,
    color: 'green',
    lineWidth: 2
  };

  if (withBoxes || !faceLandmarks.length) {
    face_api_js__WEBPACK_IMPORTED_MODULE_0__["drawDetection"](overlay, detections, drawDetectionsOptions);
  }

  face_api_js__WEBPACK_IMPORTED_MODULE_0__["drawLandmarks"](overlay, faceLandmarks, drawLandmarksOptions);
}

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shallowEquals; });
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(241);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(536);
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

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectFaceLandmarks; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(176);






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

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectFaces; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(176);






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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _withAsyncRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _withAsyncRendering__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ 324:
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

/***/ 325:
/***/ (function(module, exports) {



/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(667));
} else {}

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(165);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(166);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ../face-api.js/build/es6/index.js + 97 modules
var es6 = __webpack_require__(143);

// EXTERNAL MODULE: ./face-api.js-react/hoc/withAsyncRendering.tsx
var withAsyncRendering = __webpack_require__(176);

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
var DetectFaceLandmarks = __webpack_require__(245);

// EXTERNAL MODULE: ./face-api.js-react/facc/DetectFaces.tsx
var DetectFaces = __webpack_require__(246);

// CONCATENATED MODULE: ./face-api.js-react/facc/LoadModels.tsx










function loadModels(_x) {
  return _loadModels.apply(this, arguments);
}

function _loadModels() {
  _loadModels = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(props) {
    var ssdMobilenetv1ModelUrl, mtcnnModelUrl, tinyFaceDetectorModelUrl, faceLandmarkModelUrl, faceRecognitionModelUrl, load;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ssdMobilenetv1ModelUrl = props.ssdMobilenetv1ModelUrl, mtcnnModelUrl = props.mtcnnModelUrl, tinyFaceDetectorModelUrl = props.tinyFaceDetectorModelUrl, faceLandmarkModelUrl = props.faceLandmarkModelUrl, faceRecognitionModelUrl = props.faceRecognitionModelUrl;

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
            return Promise.all([load(es6["nets"].tinyFaceDetector, tinyFaceDetectorModelUrl), load(es6["nets"].ssdMobilenetv1, ssdMobilenetv1ModelUrl), load(es6["nets"].mtcnn, mtcnnModelUrl), load(es6["nets"].faceLandmark68Net, faceLandmarkModelUrl), load(es6["nets"].faceRecognitionNet, faceRecognitionModelUrl)]);

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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./face-api.js-react/components/DisplayResults.tsx
var DisplayResults = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(49);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(152);

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

/***/ 442:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 666:
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
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(177);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(365);
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

/***/ 667:
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

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPageContext; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(247);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(171);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(674);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(163), __webpack_require__(157)))

/***/ })

}]);
//# sourceMappingURL=1-b02f16419ad1c031ab6c.js.map