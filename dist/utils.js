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
export function createCanvasWithImageData(_a, buf) {
    var width = _a.width, height = _a.height;
    var canvas = createCanvas({ width: width, height: height });
    getContext2dOrThrow(canvas).putImageData(new ImageData(buf, width, height), 0, 0);
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
export function getDefaultDrawOptions() {
    return {
        color: 'blue',
        lineWidth: 2,
        fontSize: 20,
        fontStyle: 'Georgia'
    };
}
export function drawBox(ctx, x, y, w, h, options) {
    ctx.strokeStyle = options.color;
    ctx.lineWidth = options.lineWidth;
    ctx.strokeRect(x, y, w, h);
}
export function drawText(ctx, x, y, text, options) {
    var padText = 2 + options.lineWidth;
    ctx.fillStyle = options.color;
    ctx.font = options.fontSize + "px " + options.fontStyle;
    ctx.fillText(text, x + padText, y + padText + (options.fontSize * 0.6));
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
        var x = box.x, y = box.y, width = box.width, height = box.height;
        var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
        var withScore = Object.assign({ withScore: true }, (options || {})).withScore;
        var ctx = getContext2dOrThrow(canvas);
        drawBox(ctx, x, y, width, height, drawOptions);
        if (withScore) {
            drawText(ctx, x, y, "" + round(score), drawOptions);
        }
    });
}
//# sourceMappingURL=utils.js.map