import { FaceExpressionPrediction } from '../faceExpressionNet/types';
export declare type WithFaceExpressions<TSource> = TSource & {
    expressions: FaceExpressionPrediction[];
};
export declare function extendWithFaceExpressions<TSource>(sourceObj: TSource, expressions: FaceExpressionPrediction[]): WithFaceExpressions<TSource>;
