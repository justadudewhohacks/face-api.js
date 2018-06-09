import { getContext2dOrThrow, getElement, getMediaDimensions } from './utils';
var NetInput = /** @class */ (function () {
    function NetInput(mediaArg, dims) {
        var _this = this;
        var mediaArgArray = Array.isArray(mediaArg)
            ? mediaArg
            : [mediaArg];
        if (!mediaArgArray.length) {
            throw new Error('NetInput - empty array passed as input');
        }
        var medias = mediaArgArray.map(getElement);
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
        var _a = this.dims || dims || getMediaDimensions(media), width = _a.width, height = _a.height;
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
        this._canvases.push(canvas);
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
export { NetInput };
//# sourceMappingURL=NetInput.js.map