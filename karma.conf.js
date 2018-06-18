module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'test/**/*.ts',
      {
        pattern: 'test/images/*.jpg',
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      {
        pattern: 'weights/*.weights',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.test.json'
    },
    browsers: ['Chrome']
  })
}
