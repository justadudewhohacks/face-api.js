import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';
export function isWithFaceExpressions(obj) {
    return obj['expressions'] instanceof FaceExpressions;
}
export function extendWithFaceExpressions(sourceObj, expressions) {
    var extension = { expressions: expressions };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithFaceExpressions.js.map