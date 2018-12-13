function randomCrop(img, pts) {
  const xCoords = pts.map(pt => pt.x)
  const yCoords = pts.map(pt => pt.y)
  const minX = xCoords.reduce((x, min) => x < min ? x : min, img.width)
  const minY = yCoords.reduce((y, min) => y < min ? y : min, img.height)
  const maxX = xCoords.reduce((x, max) => x < max ? max : x, 0)
  const maxY = yCoords.reduce((y, max) => y < max ? max : y, 0)

  const x0 = Math.random() * minX
  const y0 = Math.random() * minY

  const x1 = (Math.random() * Math.abs(img.width - maxX)) + maxX
  const y1 = (Math.random() * Math.abs(img.height - maxY)) + maxY

  const targetCanvas = faceapi.createCanvas({ width: x1 - x0, height: y1 - y0 })
  const inputCanvas = img instanceof HTMLCanvasElement ? img : faceapi.createCanvasFromMedia(img)
  const region = faceapi.getContext2dOrThrow(inputCanvas)
    .getImageData(x0, y0, targetCanvas.width, targetCanvas.height)
  faceapi.getContext2dOrThrow(targetCanvas).putImageData(region, 0, 0)

  return {
    croppedImage: targetCanvas,
    shiftedPts: pts.map(pt => new faceapi.Point(pt.x - x0, pt.y - y0))
  }
}