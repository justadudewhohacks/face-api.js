import { drawText, env, getContext2dOrThrow, getDefaultDrawOptions, resolveInput, round } from 'tfjs-image-recognition-base';
import { IRect } from 'tfjs-image-recognition-base';

import { DrawFaceExpressionsInput, DrawFaceExpressionsOptions } from './types';

export function drawFaceExpressions(
  canvasArg: string | HTMLCanvasElement,
  faceExpressions: DrawFaceExpressionsInput | DrawFaceExpressionsInput[],
  options?: DrawFaceExpressionsOptions
) {
  const canvas = resolveInput(canvasArg)
  if (!(canvas instanceof env.getEnv().Canvas)) {
    throw new Error('drawFaceExpressions - expected canvas to be of type: HTMLCanvasElement')
  }

  const drawOptions = Object.assign(
    getDefaultDrawOptions(options),
    (options || {})
  )

  const ctx = getContext2dOrThrow(canvas)
  const {
    primaryColor = 'red',
    secondaryColor = 'blue',
    primaryFontSize = 22,
    secondaryFontSize = 16,
    minConfidence = 0.2
  } = drawOptions

  const faceExpressionsArray = Array.isArray(faceExpressions)
    ? faceExpressions
    : [faceExpressions]

  faceExpressionsArray.forEach(({ position, expressions }) => {
    const { x, y } = position
    const height = (position as IRect).height || 0
    const sorted = expressions.sort((a, b) => b.probability - a.probability)
    const resultsToDisplay = sorted.filter(expr => expr.probability > minConfidence)

    let offset = (y + height + resultsToDisplay.length * primaryFontSize) > canvas.height
      ? -(resultsToDisplay.length * primaryFontSize)
      : 0
    resultsToDisplay.forEach((expr, i) => {
      const text = `${expr.expression} (${round(expr.probability)})`
      drawText(
        ctx,
        x,
        y + height + (i * primaryFontSize) + offset,
        text,
        {
          textColor: i === 0 ? primaryColor : secondaryColor,
          fontSize: i === 0 ? primaryFontSize : secondaryFontSize
        }
      )
    })
  })


}