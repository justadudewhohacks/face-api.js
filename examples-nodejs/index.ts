import * as faceapi from '../src'
import '@tensorflow/tfjs-node'
import * as canvas from 'canvas';
import * as path from 'path';

const { Canvas, Image } = canvas
faceapi.env.monkeyPatch({ Canvas, Image })

async function run() {

  await faceapi.nets.ssdMobilenetv1.loadFromDisk(path.resolve(__dirname, '../weights'))

  const img = await canvas.loadImage('./bbt1.jpg')
  const detections = await faceapi.detectAllFaces(img)
  console.log(detections)
}

run()