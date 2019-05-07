import { IPoint } from 'tfjs-image-recognition-base';
import { FaceExpressions } from '../faceExpressionNet';
import { WithFaceExpressions } from '../factories/WithFaceExpressions';
export declare type DrawFaceExpressionsInput = FaceExpressions | WithFaceExpressions<{}>;
export declare function drawFaceExpressions(canvasArg: string | HTMLCanvasElement, faceExpressions: DrawFaceExpressionsInput | Array<DrawFaceExpressionsInput>, minConfidence?: number, textFieldAnchor?: IPoint): void;
