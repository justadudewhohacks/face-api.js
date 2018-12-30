function resizeCanvasAndResults(dimensions, canvas, results) {
  const { width, height } = dimensions instanceof HTMLVideoElement
    ? faceapi.getMediaDimensions(dimensions)
    : dimensions
  canvas.width = width
  canvas.height = height

  // resize detections (and landmarks) in case displayed image is smaller than
  // original size
  return faceapi.resizeResults(results, { width, height })
}

function drawDetections(dimensions, canvas, detections) {
  const resizedDetections = resizeCanvasAndResults(dimensions, canvas, detections)
  faceapi.drawDetection(canvas, resizedDetections)
}

function drawLandmarks(dimensions, canvas, results, withBoxes = true) {
  const resizedResults = resizeCanvasAndResults(dimensions, canvas, results)

  if (withBoxes) {
    faceapi.drawDetection(canvas, resizedResults.map(det => det.detection))
  }

  const faceLandmarks = resizedResults.map(det => det.landmarks)
  const drawLandmarksOptions = {
    lineWidth: 2,
    drawLines: true,
    color: 'green'
  }
  faceapi.drawLandmarks(canvas, faceLandmarks, drawLandmarksOptions)
}

function drawExpressions(dimensions, canvas, results, thresh, withBoxes = true) {
  const resizedResults = resizeCanvasAndResults(dimensions, canvas, results)

  if (withBoxes) {
    faceapi.drawDetection(canvas, resizedResults.map(det => det.detection), { withScore: false })
  }

  resizedResults.forEach(res => {
    const { box, imageDims } = res.detection
    const { expressions } = res

    const sorted = expressions.sort((a, b) => b.probability - a.probability)
    const resultsToDisplay = sorted.filter(expr => expr.probability > thresh)

    let offset = (box.y + box.height + resultsToDisplay.length * 22) > imageDims.height
      ? - (resultsToDisplay.length * 22)
      : 0
    resultsToDisplay.forEach((expr, i) => {
      const text = `${expr.expression} (${faceapi.round(expr.probability)})`
      faceapi.drawText(
        faceapi.getContext2dOrThrow($('#overlay').get(0)),
        box.x,
        box.y + box.height + i * 22 + offset,
        text,
        { textColor: i === 0 ? 'red' : 'blue', fontSize: i === 0 ? 22 : 16 }
      )
    })
  })
}