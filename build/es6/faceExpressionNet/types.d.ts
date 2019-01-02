export declare const faceExpressionLabels: {
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
};
export declare type FaceExpression = 'neutral' | 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised';
export declare type FaceExpressionPrediction = {
    expression: FaceExpression;
    probability: number;
};
