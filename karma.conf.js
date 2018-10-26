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

let exclude = (
  process.env.UUT
    ? [
        'dom',
        'faceLandmarkNet',
        'faceRecognitionNet',
        'ssdMobilenetv1',
        'tinyFaceDetector',
        'mtcnn',
        'tinyYolov2'
      ]
    : ['tinyYolov2']
  )
    .filter(ex => ex !== process.env.UUT)
    .map(ex => `test/tests/${ex}/*.ts`)


exclude = exclude.concat(
  process.env.EXCLUDE_UNCOMPRESSED
    ? ['**/*.uncompressed.test.ts']
    : []
)

module.exports = function(config) {
  const args = []
  if (process.env.BACKEND_CPU) {
    args.push('backend_cpu')
  }

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
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout : 120000,
    captureTimeout: 60000,
    client: {
      jasmine: {
        timeoutInterval: 60000,
        args
      }
    }
  })
}
