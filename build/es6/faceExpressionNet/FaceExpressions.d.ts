export declare const FACE_EXPRESSION_LABELS: string[];
export declare class FaceExpressions {
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    constructor(probabilities: number[] | Float32Array);
    asSortedArray(): {
        expression: string;
        probability: number;
    }[];
}
