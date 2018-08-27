import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { isEven, NeuralNetwork, Point, toNetInput } from 'tfjs-image-recognition-base';
import { convLayer } from 'tfjs-tiny-yolov2';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { extractParams } from './extractParams';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { loadQuantizedParams } from './loadQuantizedParams';
function conv(x, params) {
    return convLayer(x, params, 'valid', true);
}
function maxPool(x, strides) {
    if (strides === void 0) { strides = [2, 2]; }
    return tf.maxPool(x, [2, 2], strides, 'valid');
}
var FaceLandmarkNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarkNet, _super);
    function FaceLandmarkNet() {
        return _super.call(this, 'FaceLandmarkNet') || this;
    }
    FaceLandmarkNet.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceLandmarkNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(128, true);
            var out = conv(batchTensor, params.conv0);
            out = maxPool(out);
            out = conv(out, params.conv1);
            out = conv(out, params.conv2);
            out = maxPool(out);
            out = conv(out, params.conv3);
            out = conv(out, params.conv4);
            out = maxPool(out);
            out = conv(out, params.conv5);
            out = conv(out, params.conv6);
            out = maxPool(out, [1, 1]);
            out = conv(out, params.conv7);
            var fc0 = tf.relu(fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0));
            var fc1 = fullyConnectedLayer(fc0, params.fc1);
            var createInterleavedTensor = function (fillX, fillY) {
                return tf.stack([
                    tf.fill([68], fillX),
                    tf.fill([68], fillY)
                ], 1).as2D(1, 136).as1D();
            };
            /* shift coordinates back, to undo centered padding
              x = ((x * widthAfterPadding) - shiftX) / width
              y = ((y * heightAfterPadding) - shiftY) / height
            */
            var landmarkTensors = fc1
                .mul(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(input.getPaddings(batchIdx).x + input.getInputWidth(batchIdx), input.getPaddings(batchIdx).y + input.getInputHeight(batchIdx));
            })))
                .sub(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(Math.floor(input.getPaddings(batchIdx).x / 2), Math.floor(input.getPaddings(batchIdx).y / 2));
            })))
                .div(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(input.getInputWidth(batchIdx), input.getInputHeight(batchIdx));
            })));
            return landmarkTensors;
        });
    };
    FaceLandmarkNet.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input, true)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    FaceLandmarkNet.prototype.detectLandmarks = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, landmarkTensors, landmarksForBatch;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput(input, true)];
                    case 1:
                        netInput = _a.sent();
                        landmarkTensors = tf.tidy(function () { return tf.unstack(_this.forwardInput(netInput)); });
                        return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var landmarksArray, _a, _b, xCoords, yCoords;
                                return tslib_1.__generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = Array).from;
                                            return [4 /*yield*/, landmarkTensor.data()];
                                        case 1:
                                            landmarksArray = _b.apply(_a, [_c.sent()]);
                                            xCoords = landmarksArray.filter(function (_, i) { return isEven(i); });
                                            yCoords = landmarksArray.filter(function (_, i) { return !isEven(i); });
                                            return [2 /*return*/, new FaceLandmarks68(Array(68).fill(0).map(function (_, i) { return new Point(xCoords[i], yCoords[i]); }), {
                                                    height: netInput.getInputHeight(batchIdx),
                                                    width: netInput.getInputWidth(batchIdx),
                                                })];
                                    }
                                });
                            }); }))];
                    case 2:
                        landmarksForBatch = _a.sent();
                        landmarkTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, netInput.isBatchInput
                                ? landmarksForBatch
                                : landmarksForBatch[0]];
                }
            });
        });
    };
    FaceLandmarkNet.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams(uri);
    };
    FaceLandmarkNet.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return FaceLandmarkNet;
}(NeuralNetwork));
export { FaceLandmarkNet };
//# sourceMappingURL=FaceLandmarkNet.js.map