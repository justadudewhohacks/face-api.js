"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var isMediaElement_1 = require("./commons/isMediaElement");
var isTensor_1 = require("./commons/isTensor");
var NetInput_1 = require("./NetInput");
var utils_1 = require("./utils");
/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @param manageCreatedInput If a new NetInput instance is created from the inputs, this flag
 * determines, whether to set the NetInput as managed or not.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
function toNetInput(inputs, manageCreatedInput) {
    if (manageCreatedInput === void 0) { manageCreatedInput = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var afterCreate, inputArgArray, getIdxHint, inputArray;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (inputs instanceof NetInput_1.NetInput) {
                        return [2 /*return*/, inputs];
                    }
                    afterCreate = function (netInput) { return manageCreatedInput
                        ? netInput.managed()
                        : netInput; };
                    if (isTensor_1.isTensor4D(inputs)) {
                        return [2 /*return*/, afterCreate(new NetInput_1.NetInput(inputs))];
                    }
                    inputArgArray = Array.isArray(inputs)
                        ? inputs
                        : [inputs];
                    if (!inputArgArray.length) {
                        throw new Error('toNetInput - empty array passed as input');
                    }
                    getIdxHint = function (idx) { return Array.isArray(inputs) ? " at input index " + idx + ":" : ''; };
                    inputArray = inputArgArray.map(utils_1.resolveInput);
                    inputArray.forEach(function (input, i) {
                        if (!isMediaElement_1.isMediaElement(input) && !isTensor_1.isTensor3D(input) && !isTensor_1.isTensor4D(input)) {
                            if (typeof inputArgArray[i] === 'string') {
                                throw new Error("toNetInput -" + getIdxHint(i) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i]);
                            }
                            throw new Error("toNetInput -" + getIdxHint(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
                        }
                        if (isTensor_1.isTensor4D(input)) {
                            // if tf.Tensor4D is passed in the input array, the batch size has to be 1
                            var batchSize = input.shape[0];
                            if (batchSize !== 1) {
                                throw new Error("toNetInput -" + getIdxHint(i) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                            }
                        }
                    });
                    // wait for all media elements being loaded
                    return [4 /*yield*/, Promise.all(inputArray.map(function (input) { return isMediaElement_1.isMediaElement(input) && utils_1.awaitMediaLoaded(input); }))];
                case 1:
                    // wait for all media elements being loaded
                    _a.sent();
                    return [2 /*return*/, afterCreate(new NetInput_1.NetInput(inputArray, Array.isArray(inputs)))];
            }
        });
    });
}
exports.toNetInput = toNetInput;
//# sourceMappingURL=toNetInput.js.map