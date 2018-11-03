import '@tensorflow/tfjs-node';

import * as canvas from 'canvas';
import * as fs from 'fs';

import * as faceapi from '../src';

const { Canvas, Image } = canvas
faceapi.env.monkeyPatch({ Canvas, Image })

async function run() {

  await faceapi.nets.ssdMobilenetv1.loadFromDisk('../weights')

  const img = await canvas.loadImage('./bbt1.jpg')
  const detections = await faceapi.detectAllFaces(img)

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.drawDetection(out, detections)

  fs.writeFileSync('./faceDetection.jpg', out.toBuffer('image/jpeg'))
  console.log(detections)
}

run()