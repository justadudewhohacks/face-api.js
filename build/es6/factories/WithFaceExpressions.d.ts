import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';
export declare type WithFaceExpressions<TSource> = TSource & {
    expressions: FaceExpressions;
};
export declare function isWithFaceExpressions(obj: any): obj is WithFaceExpressions<{}>;
export declare function extendWithFaceExpressions<TSource>(sourceObj: TSource, expressions: FaceExpressions): WithFaceExpressions<TSource>;
