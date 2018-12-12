import { canvas, faceapi, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

async function run() {

  await faceDetectionNet.loadFromDisk('../../weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('../../weights')

  const img = await canvas.loadImage('../images/bbt1.jpg')
  const results = await faceapi.detectAllFaces(img, faceDetectionOptions)
    .withFaceLandmarks()

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.drawDetection(out, results.map(res => res.detection))
  faceapi.drawLandmarks(out, results.map(res => res.landmarks), { drawLines: true, color: 'red' })

  saveFile('faceLandmarkDetection.jpg', out.toBuffer('image/jpeg'))
}

run()