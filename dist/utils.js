import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
export function isFloat(num) {
    return num % 1 !== 0;
}
export function round(num) {
    return Math.floor(num * 100) / 100;
}
export function getElement(arg) {
    if (typeof arg === 'string') {
        return document.getElementById(arg);
    }
    return arg;
}
export function getContext2dOrThrow(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('canvas 2d context is null');
    }
    return ctx;
}
export function createCanvas(_a) {
    var width = _a.width, height = _a.height;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
export function createCanvasFromMedia(media, dims) {
    var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
    var canvas = createCanvas({ width: width, height: height });
    getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
    return canvas;
}
export function getMediaDimensions(media) {
    if (media instanceof HTMLImageElement) {
        return { width: media.naturalWidth, height: media.naturalHeight };
    }
    if (media instanceof HTMLVideoElement) {
        return { width: media.videoWidth, height: media.videoHeight };
    }
    return media;
}
export function bufferToImage(buf) {
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
export function imageTensorToCanvas(imgTensor, canvas) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var targetCanvas, _a, _, height, width, numChannels;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    targetCanvas = canvas || document.createElement('canvas');
                    _a = imgTensor.shape, _ = _a[0], height = _a[1], width = _a[2], numChannels = _a[3];
                    return [4 /*yield*/, tf.toPixels(imgTensor.as3D(height, width, numChannels).toInt(), targetCanvas)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, targetCanvas];
            }
        });
    });
}
export function getDefaultDrawOptions() {
    return {
        color: 'blue',
        lineWidth: 2,
        fontSize: 20,
        fontStyle: 'Georgia'
    };
}
export function drawBox(ctx, x, y, w, h, options) {
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    ctx.strokeStyle = drawOptions.color;
    ctx.lineWidth = drawOptions.lineWidth;
    ctx.strokeRect(x, y, w, h);
}
export function drawText(ctx, x, y, text, options) {
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    var padText = 2 + drawOptions.lineWidth;
    ctx.fillStyle = drawOptions.color;
    ctx.font = drawOptions.fontSize + "px " + drawOptions.fontStyle;
    ctx.fillText(text, x + padText, y + padText + (drawOptions.fontSize * 0.6));
}
export function drawDetection(canvasArg, detection, options) {
    var canvas = getElement(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement');
    }
    var detectionArray = Array.isArray(detection)
        ? detection
        : [detection];
    detectionArray.forEach(function (det) {
        var _a = det.getBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
        var withScore = Object.assign({ withScore: true }, (options || {})).withScore;
        var ctx = getContext2dOrThrow(canvas);
        drawBox(ctx, x, y, width, height, drawOptions);
        if (withScore) {
            drawText(ctx, x, y, "" + round(det.getScore()), drawOptions);
        }
    });
}
function drawContour(ctx, points, isClosed) {
    if (isClosed === void 0) { isClosed = false; }
    ctx.beginPath();
    points.slice(1).forEach(function (_a, prevIdx) {
        var x = _a.x, y = _a.y;
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
export function drawLandmarks(canvasArg, faceLandmarks, options) {
    var canvas = getElement(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
    }
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
    var ctx = getContext2dOrThrow(canvas);
    var lineWidth = drawOptions.lineWidth, color = drawOptions.color;
    if (drawLines) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        drawContour(ctx, faceLandmarks.getJawOutline());
        drawContour(ctx, faceLandmarks.getLeftEyeBrow());
        drawContour(ctx, faceLandmarks.getRightEyeBrow());
        drawContour(ctx, faceLandmarks.getNose());
        drawContour(ctx, faceLandmarks.getLeftEye(), true);
        drawContour(ctx, faceLandmarks.getRightEye(), true);
        drawContour(ctx, faceLandmarks.getMouth(), true);
        return;
    }
    // else draw points
    var ptOffset = lineWidth / 2;
    ctx.fillStyle = color;
    faceLandmarks.getPositions().forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
}
//# sourceMappingURL=utils.js.map