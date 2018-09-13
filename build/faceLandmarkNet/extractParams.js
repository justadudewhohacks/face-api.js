"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
function extractParams(weights) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractConvParams = tfjs_tiny_yolov2_1.extractConvParamsFactory(extractWeights, paramMappings);
    var extractFCParams = tfjs_tiny_yolov2_1.extractFCParamsFactory(extractWeights, paramMappings);
    var conv0 = extractConvParams(3, 32, 3, 'conv0');
    var conv1 = extractConvParams(32, 64, 3, 'conv1');
    var conv2 = extractConvParams(64, 64, 3, 'conv2');
    var conv3 = extractConvParams(64, 64, 3, 'conv3');
    var conv4 = extractConvParams(64, 64, 3, 'conv4');
    var conv5 = extractConvParams(64, 128, 3, 'conv5');
    var conv6 = extractConvParams(128, 128, 3, 'conv6');
    var conv7 = extractConvParams(128, 256, 3, 'conv7');
    var fc0 = extractFCParams(6400, 1024, 'fc0');
    var fc1 = extractFCParams(1024, 136, 'fc1');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3,
            conv4: conv4,
            conv5: conv5,
            conv6: conv6,
            conv7: conv7,
            fc0: fc0,
            fc1: fc1
        }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map