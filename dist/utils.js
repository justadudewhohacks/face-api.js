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
export function getMediaDimensions(media) {
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
export function drawBox(ctx, x, y, w, h, options) {
    ctx.strokeStyle = options.color;
    ctx.lineWidth = options.lineWidth;
    ctx.strokeRect(x, y, w, h);
}
export function drawText(ctx, x, y, text, options) {
    ctx.fillStyle = options.color;
    ctx.font = options.fontSize + "px " + options.fontStyle;
    ctx.fillText(text, x, y);
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
        var score = det.score, box = det.box;
        var left = box.left, right = box.right, top = box.top, bottom = box.bottom;
        var _a = (options || {}), _b = _a.color, color = _b === void 0 ? 'blue' : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 2 : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 20 : _d, _e = _a.fontStyle, fontStyle = _e === void 0 ? 'Georgia' : _e, _f = _a.withScore, withScore = _f === void 0 ? true : _f;
        var padText = 2 + lineWidth;
        var ctx = getContext2dOrThrow(canvas);
        drawBox(ctx, left, top, right - left, bottom - top, { lineWidth: lineWidth, color: color });
        if (withScore) {
            drawText(ctx, left + padText, top + (fontSize * 0.6) + padText, "" + round(score), { fontSize: fontSize, fontStyle: fontStyle, color: color });
        }
    });
}
//# sourceMappingURL=utils.js.map