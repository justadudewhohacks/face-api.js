const dataFiles = [
  'test/images/*.jpg',
  'test/images/*.png',
  'test/data/*.json',
  'test/media/*.mp4',
  'weights/**/*',
  'weights_uncompressed/**/*',
  'weights_unused/**/*'
].map(pattern => ({
  pattern,
  watched: false,
  included: false,
  served: true,
  nocache: false
}))

const exclude = process.env.UUT
  ? [
    'dom',
    'faceLandmarkNet',
    'faceRecognitionNet',
    'ssdMobilenetv1',
    'tinyFaceDetector',
    'mtcnn',
    'tinyYolov2'
  ]
    .filter(ex => ex !== process.env.UUT)
    .map(ex => `test/tests/${ex}/*.ts`)
  : []

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'test/**/*.ts'
    ].concat(dataFiles),
    exclude,
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.test.json'
    },
    browsers: ['Chrome'],
    browserNoActivityTimeout: 120000,
    captureTimeout: 60000,
    client: {
      jasmine: {
        timeoutInterval: 60000
      }
    }
  })
}
