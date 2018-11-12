import { canvas, faceapi, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

const REFERENCE_IMAGE = '../images/bbt1.jpg'
const QUERY_IMAGE = '../images/bbt4.jpg'

async function run() {

  await faceDetectionNet.loadFromDisk('../../weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('../../weights')
  await faceapi.nets.faceRecognitionNet.loadFromDisk('../../weights')

  const referenceImage = await canvas.loadImage(REFERENCE_IMAGE)
  const queryImage = await canvas.loadImage(QUERY_IMAGE)

  const resultsRef = await faceapi.detectAllFaces(referenceImage, faceDetectionOptions)
    .withFaceLandmarks()
    .withFaceDescriptors()

  const resultsQuery = await faceapi.detectAllFaces(queryImage, faceDetectionOptions)
    .withFaceLandmarks()
    .withFaceDescriptors()

  const faceMatcher = new faceapi.FaceMatcher(resultsRef)

  const labels = faceMatcher.labeledDescriptors
    .map(ld => ld.label)
  const refBoxesWithText = resultsRef
    .map(res => res.detection.box)
    .map((box, i) => new faceapi.BoxWithText(box, labels[i]))
  const outRef = faceapi.createCanvasFromMedia(referenceImage) as any
  faceapi.drawDetection(outRef, refBoxesWithText)
  saveFile('referenceImage.jpg', outRef.toBuffer('image/jpeg'))

  const queryBoxesWithText = resultsQuery.map(res => {
    const bestMatch = faceMatcher.findBestMatch(res.descriptor)
    return new faceapi.BoxWithText(res.detection.box, bestMatch.toString())
  })
  const outQuery = faceapi.createCanvasFromMedia(queryImage) as any
  faceapi.drawDetection(outQuery, queryBoxesWithText)
  saveFile('queryImage.jpg', outQuery.toBuffer('image/jpeg'))
}

run()