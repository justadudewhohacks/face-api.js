"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var isTensor_1 = require("./commons/isTensor");
function isFloat(num) {
    return num % 1 !== 0;
}
exports.isFloat = isFloat;
function isEven(num) {
    return num % 2 === 0;
}
exports.isEven = isEven;
function round(num) {
    return Math.floor(num * 100) / 100;
}
exports.round = round;
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
exports.sigmoid = sigmoid;
function isDimensions(obj) {
    return obj && obj.width && obj.height;
}
exports.isDimensions = isDimensions;
function resolveInput(arg) {
    if (typeof arg === 'string') {
        return document.getElementById(arg);
    }
    return arg;
}
exports.resolveInput = resolveInput;
function isLoaded(media) {
    return (media instanceof HTMLImageElement && media.complete)
        || (media instanceof HTMLVideoElement && media.readyState >= 3);
}
exports.isLoaded = isLoaded;
function awaitMediaLoaded(media) {
    return new Promise(function (resolve, reject) {
        if (media instanceof HTMLCanvasElement || isLoaded(media)) {
            return resolve();
        }
        function onLoad(e) {
            if (!e.currentTarget)
                return;
            e.currentTarget.removeEventListener('load', onLoad);
            e.currentTarget.removeEventListener('error', onError);
            resolve(e);
        }
        function onError(e) {
            if (!e.currentTarget)
                return;
            e.currentTarget.removeEventListener('load', onLoad);
            e.currentTarget.removeEventListener('error', onError);
            reject(e);
        }
        media.addEventListener('load', onLoad);
        media.addEventListener('error', onError);
    });
}
exports.awaitMediaLoaded = awaitMediaLoaded;
function getContext2dOrThrow(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('canvas 2d context is null');
    }
    return ctx;
}
exports.getContext2dOrThrow = getContext2dOrThrow;
function createCanvas(_a) {
    var width = _a.width, height = _a.height;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
exports.createCanvas = createCanvas;
function createCanvasFromMedia(media, dims) {
    if (!isLoaded(media)) {
        throw new Error('createCanvasFromMedia - media has not finished loading yet');
    }
    var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
    var canvas = createCanvas({ width: width, height: height });
    getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
    return canvas;
}
exports.createCanvasFromMedia = createCanvasFromMedia;
function getMediaDimensions(media) {
    if (media instanceof HTMLImageElement) {
        return { width: media.naturalWidth, height: media.naturalHeight };
    }
    if (media instanceof HTMLVideoElement) {
        return { width: media.videoWidth, height: media.videoHeight };
    }
    return media;
}
exports.getMediaDimensions = getMediaDimensions;
function bufferToImage(buf) {
    return new Promise(function (resolve, reject) {
        if (!(buf instanceof Blob)) {
            return reject('bufferToImage - expected buf to be of type: Blob');
        }
        var reader = new FileReader();
        reader.onload = function () {
            var img = new Image();
            img.onload = function () { return resolve(img); };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(buf);
    });
}
exports.bufferToImage = bufferToImage;
function imageTensorToCanvas(imgTensor, canvas) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var targetCanvas, _a, height, width, numChannels, imgTensor3D;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    targetCanvas = canvas || document.createElement('canvas');
                    _a = imgTensor.shape.slice(isTensor_1.isTensor4D(imgTensor) ? 1 : 0), height = _a[0], width = _a[1], numChannels = _a[2];
                    imgTensor3D = tf.tidy(function () { return imgTensor.as3D(height, width, numChannels).toInt(); });
                    return [4 /*yield*/, tf.toPixels(imgTensor3D, targetCanvas)];
                case 1:
                    _b.sent();
                    imgTensor3D.dispose();
                    return [2 /*return*/, targetCanvas];
            }
        });
    });
}
exports.imageTensorToCanvas = imageTensorToCanvas;
//# sourceMappingURL=utils.js.map