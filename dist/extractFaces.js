import { createCanvas, getContext2dOrThrow } from './utils';
/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export function extractFaces(image, detections) {
    var ctx = getContext2dOrThrow(image);
    return detections.map(function (det) {
        var _a = det.forSize(image.width, image.height).getBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var faceImg = createCanvas({ width: width, height: height });
        getContext2dOrThrow(faceImg)
            .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
        return faceImg;
    });
}
//# sourceMappingURL=extractFaces.js.map