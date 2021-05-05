let spec_files = ['**/*.test.ts']

// exclude browser tests
spec_files = spec_files.concat(['!**/*.browser.test.ts'])
spec_files = spec_files.concat(['!**/tests-legacy/**/*.ts'])

module.exports = {
  spec_dir: 'test',
  spec_files,
  random: false
}