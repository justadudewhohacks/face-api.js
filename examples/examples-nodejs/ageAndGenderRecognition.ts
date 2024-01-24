import * as faceapi from 'face-api.js';

import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

async function run() {

  await faceDetectionNet.loadFromDisk('../../weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('../../weights')
  await faceapi.nets.ageGenderNet.loadFromDisk('../../weights')

  const img = await canvas.loadImage('../images/bbt1.jpg')
  const results = await faceapi.detectAllFaces(img, faceDetectionOptions)
    .withFaceLandmarks()
    .withAgeAndGender()

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.draw.drawDetections(out, results.map(res => res.detection))
  results.forEach(result => {
    const { age, gender, genderProbability } = result
    new faceapi.draw.DrawTextField(
      [
        `${faceapi.utils.round(age, 0)} years`,
        `${gender} (${faceapi.utils.round(genderProbability)})`
      ],
      result.detection.box.bottomLeft
    ).draw(out)
  })

  saveFile('ageAndGenderRecognition.jpg', out.toBuffer('image/jpeg'))
  console.log('done, saved results to out/ageAndGenderRecognition.jpg')
}

run()