let spec_files = ['**/*.test.ts'].concat(
  process.env.EXCLUDE_UNCOMPRESSED
    ? ['!**/*.uncompressed.test.ts']
    : []
)

// exclude browser tests
spec_files = spec_files.concat(['!**/*.browser.test.ts'])

module.exports = {
  spec_dir: 'test',
  spec_files,
  random: false
}