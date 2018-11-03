
const spec_files = ['**/*.test.ts'].concat(
  process.env.EXCLUDE_UNCOMPRESSED
    ? ['!**/*.uncompressed.test.ts']
    : []
)

module.exports = {
  spec_dir: 'test',
  spec_files,
  random: false
}