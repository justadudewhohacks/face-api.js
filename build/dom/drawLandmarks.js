import { getContext2dOrThrow, getDefaultDrawOptions, resolveInput } from 'tfjs-image-recognition-base';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { drawContour } from './drawContour';
export function drawLandmarks(canvasArg, faceLandmarks, options) {
    var canvas = resolveInput(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
    }
    var drawOptions = Object.assign(getDefaultDrawOptions(options), (options || {}));
    var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
    var ctx = getContext2dOrThrow(canvas);
    var lineWidth = drawOptions.lineWidth, _a = drawOptions.color, color = _a === void 0 ? 'blue' : _a;
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
    faceLandmarksArray.forEach(function (landmarks) {
        if (drawLines && landmarks instanceof FaceLandmarks68) {
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            drawContour(ctx, landmarks.getJawOutline());
            drawContour(ctx, landmarks.getLeftEyeBrow());
            drawContour(ctx, landmarks.getRightEyeBrow());
            drawContour(ctx, landmarks.getNose());
            drawContour(ctx, landmarks.getLeftEye(), true);
            drawContour(ctx, landmarks.getRightEye(), true);
            drawContour(ctx, landmarks.getMouth(), true);
            return;
        }
        // else draw points
        var ptOffset = lineWidth / 2;
        ctx.fillStyle = color;
        landmarks.getPositions().forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
    });
}
//# sourceMappingURL=drawLandmarks.js.map