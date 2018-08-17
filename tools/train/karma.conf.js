module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'tinyYolov2/**/*.ts'
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.test.json'
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
