import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from '../commons/convLayer';
import { getImageTensor } from '../getImageTensor';
import { padToSquare } from '../padToSquare';
import { extractParams } from './extractParams';
import { FaceLandmarks } from './FaceLandmarks';
import { fullyConnectedLayer } from './fullyConnectedLayer';
function conv(x, params) {
    return convLayer(x, params, 'valid', true);
}
function maxPool(x, strides) {
    if (strides === void 0) { strides = [2, 2]; }
    return tf.maxPool(x, [2, 2], strides, 'valid');
}
export function faceLandmarkNet(weights) {
    var params = extractParams(weights);
    function detectLandmarks(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var adjustRelativeX, adjustRelativeY, imageDimensions, outTensor, faceLandmarksArray, _a, _b, xCoords, yCoords;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        adjustRelativeX = 0;
                        adjustRelativeY = 0;
                        outTensor = tf.tidy(function () {
                            var imgTensor = getImageTensor(input);
                            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            imageDimensions = { width: width, height: height };
                            imgTensor = padToSquare(imgTensor, true);
                            adjustRelativeX = (height > width) ? imgTensor.shape[2] / (2 * width) : 0;
                            adjustRelativeY = (width > height) ? imgTensor.shape[1] / (2 * height) : 0;
                            // work with 128 x 128 sized face images
                            if (imgTensor.shape[1] !== 128 || imgTensor.shape[2] !== 128) {
                                imgTensor = tf.image.resizeBilinear(imgTensor, [128, 128]);
                            }
                            var out = conv(imgTensor, params.conv0_params);
                            out = maxPool(out);
                            out = conv(out, params.conv1_params);
                            out = conv(out, params.conv2_params);
                            out = maxPool(out);
                            out = conv(out, params.conv3_params);
                            out = conv(out, params.conv4_params);
                            out = maxPool(out);
                            out = conv(out, params.conv5_params);
                            out = conv(out, params.conv6_params);
                            out = maxPool(out, [1, 1]);
                            out = conv(out, params.conv7_params);
                            var fc0 = tf.relu(fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0_params));
                            var fc1 = fullyConnectedLayer(fc0, params.fc1_params);
                            return fc1;
                        });
                        _b = (_a = Array).from;
                        return [4 /*yield*/, outTensor.data()];
                    case 1:
                        faceLandmarksArray = _b.apply(_a, [_c.sent()]);
                        xCoords = faceLandmarksArray.filter(function (c, i) { return (i - 1) % 2; }).map(function (x) { return x + adjustRelativeX; });
                        yCoords = faceLandmarksArray.filter(function (c, i) { return i % 2; }).map(function (y) { return y + adjustRelativeY; });
                        outTensor.dispose();
                        return [2 /*return*/, new FaceLandmarks(Array(68).fill(0).map(function (_, i) { return ({ x: xCoords[i], y: yCoords[i] }); }), imageDimensions)];
                }
            });
        });
    }
    return {
        detectLandmarks: detectLandmarks
    };
}
//# sourceMappingURL=index.js.map