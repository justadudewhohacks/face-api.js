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

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'test/**/*.ts'
    ].concat(dataFiles),
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.test.json'
    },
    browsers: ['Chrome'],
    browserNoActivityTimeout: 60000,
    client: {
      jasmine: {
        timeoutInterval: 30000
      }
    }
  })
}
