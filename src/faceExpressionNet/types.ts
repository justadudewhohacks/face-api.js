export const faceExpressionLabels = {
  neutral: 0,
  happy: 1,
  sad: 2,
  angry: 3,
  fearful: 4,
  disgusted: 5,
  surprised:6
}

export type FaceExpression = 'neutral' | 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised'

export type FaceExpressionPrediction = {
  expression: FaceExpression,
  probability: number
}
