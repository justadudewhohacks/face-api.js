"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NetInput_1 = require("./NetInput");
var utils_1 = require("./utils");
/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
function toNetInput(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var mediaArgArray, medias;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (input instanceof NetInput_1.NetInput) {
                        return [2 /*return*/, input];
                    }
                    mediaArgArray = Array.isArray(input)
                        ? input
                        : [input];
                    if (!mediaArgArray.length) {
                        throw new Error('toNetInput - empty array passed as input');
                    }
                    medias = mediaArgArray.map(utils_1.getElement);
                    medias.forEach(function (media, i) {
                        if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) {
                            var idxHint = Array.isArray(input) ? " at input index " + i + ":" : '';
                            if (typeof mediaArgArray[i] === 'string') {
                                throw new Error("toNetInput -" + idxHint + " string passed, but could not resolve HTMLElement for element id");
                            }
                            throw new Error("toNetInput -" + idxHint + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id");
                        }
                    });
                    // wait for all media elements being loaded
                    return [4 /*yield*/, Promise.all(medias.map(function (media) { return utils_1.awaitMediaLoaded(media); }))];
                case 1:
                    // wait for all media elements being loaded
                    _a.sent();
                    return [2 /*return*/, new NetInput_1.NetInput(medias)];
            }
        });
    });
}
exports.toNetInput = toNetInput;
//# sourceMappingURL=toNetInput.js.map