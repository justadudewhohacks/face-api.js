const path = require('path')
const fs = require('fs')

const excludes = [
  { dir: 'faceLandmarkNet', exceptions: ['index.ts', 'FaceLandmark68Net.ts', 'FaceLandmark68TinyNet.ts'] },
  { dir: 'faceRecognitionNet', exceptions: ['index.ts', 'FaceRecognitionNet.ts'] },
  { dir: 'mtcnn', exceptions: ['index.ts', 'Mtcnn.ts', 'MtcnnOptions.ts'] },
  { dir: 'ssdMobilenetv1', exceptions: ['index.ts', 'SsdMobilenetv1.ts', 'SsdMobilenetv1Options.ts'] },
  { dir: 'tinyFaceDetector', exceptions: ['index.ts', 'TinyFaceDetector.ts', 'TinyFaceDetectorOptions.ts'] },
  { dir: 'tinyYolov2', exceptions: ['index.ts', 'TinyYolov2.ts'] }
]

const exclude = excludes.map(({ dir, exceptions }) => {
  const files = fs.readdirSync(path.resolve('src', dir))
    .filter(file => !exceptions.some(ex => ex === file))

  return files.map(file => `**/${dir}/${file}`)
}).reduce((flat, arr) => flat.concat(arr), [])

module.exports = {
  mode: 'file',
  out: 'docs',
  module: 'commonjs',
  target: 'es5',
  theme: 'default',
  excludeExternals: true,
  includeDeclarations: true,
  excludePrivate: true,
  excludeNotExported: true,
  stripInternal: true,
  externalPattern: 'node_modules/@tensorflow',
  exclude
}