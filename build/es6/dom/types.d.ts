import { IPoint, IRect } from 'tfjs-image-recognition-base';
import { WithFaceExpressions } from '../factories/WithFaceExpressions';
export declare type DrawLandmarksOptions = {
    lineWidth?: number;
    color?: string;
    drawLines?: boolean;
};
export declare type DrawFaceExpressionsOptions = {
    primaryColor?: string;
    secondaryColor?: string;
    primaryFontSize?: number;
    secondaryFontSize?: number;
    minConfidence?: number;
};
export declare type DrawFaceExpressionsInput = WithFaceExpressions<{
    position: IPoint | IRect;
}>;
