import { canvas, faceapi, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

async function run() {

  await faceDetectionNet.loadFromDisk('../../weights')

  const img = await canvas.loadImage('../images/bbt1.jpg')
  const detections = await faceapi.detectAllFaces(img, faceDetectionOptions)

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.drawDetection(out, detections)

  saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'))
  console.log('done, saved results to out/faceDetection.jpg')
}

run()