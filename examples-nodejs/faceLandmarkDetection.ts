import '@tensorflow/tfjs-node';

import * as canvas from 'canvas';
import * as fs from 'fs';

import * as faceapi from '../src';

const { Canvas, Image } = canvas
faceapi.env.monkeyPatch({ Canvas, Image })

async function run() {

  await faceapi.nets.ssdMobilenetv1.loadFromDisk('../weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('../weights')

  const img = await canvas.loadImage('./bbt1.jpg')
  const results = await faceapi.detectAllFaces(img).withFaceLandmarks()

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.drawDetection(out, results.map(res => res.detection))
  faceapi.drawLandmarks(out, results.map(res => res.faceLandmarks), { drawLines: true, color: 'red' })

  fs.writeFileSync('./faceLandmarkDetection.jpg', out.toBuffer('image/jpeg'))
}

run()