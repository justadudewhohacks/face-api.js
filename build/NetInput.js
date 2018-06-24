"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var NetInput = /** @class */ (function () {
    function NetInput(mediaArg, dims) {
        var _this = this;
        var mediaArgArray = Array.isArray(mediaArg)
            ? mediaArg
            : [mediaArg];
        if (!mediaArgArray.length) {
            throw new Error('NetInput - empty array passed as input');
        }
        var medias = mediaArgArray.map(utils_1.getElement);
        medias.forEach(function (media, i) {
            if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) {
                var idxHint = Array.isArray(mediaArg) ? " at input index " + i + ":" : '';
                if (typeof mediaArgArray[i] === 'string') {
                    throw new Error("NetInput -" + idxHint + " string passed, but could not resolve HTMLElement for element id");
                }
                throw new Error("NetInput -" + idxHint + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id");
            }
        });
        this._canvases = [];
        medias.forEach(function (m) { return _this.initCanvas(m, dims); });
    }
    NetInput.prototype.initCanvas = function (media, dims) {
        if (media instanceof HTMLCanvasElement) {
            this._canvases.push(media);
            return;
        }
        // if input is batch type, make sure every canvas has the same dimensions
        var canvasDims = this.dims || dims;
        this._canvases.push(utils_1.createCanvasFromMedia(media, canvasDims));
    };
    Object.defineProperty(NetInput.prototype, "canvases", {
        get: function () {
            return this._canvases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "width", {
        get: function () {
            return (this._canvases[0] || {}).width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "height", {
        get: function () {
            return (this._canvases[0] || {}).height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "dims", {
        get: function () {
            var _a = this, width = _a.width, height = _a.height;
            return (width > 0 && height > 0) ? { width: width, height: height } : null;
        },
        enumerable: true,
        configurable: true
    });
    return NetInput;
}());
exports.NetInput = NetInput;
//# sourceMappingURL=NetInput.js.map