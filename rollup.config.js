import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const { minify } = process.env

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ].concat([]),
  output: {
    extend: true,
    file: `dist/face-api${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'faceapi',
    globals: {
      'crypto': 'crypto'
    },
    sourcemap: minify ? false : true
  },
  external: ['crypto'],
  onwarn: (warning) => {
    const ignoreWarnings = ['CIRCULAR_DEPENDENCY', 'CIRCULAR', 'THIS_IS_UNDEFINED']
    if (ignoreWarnings.some(w => w === warning.code))
      return

    if (warning.missing === 'alea')
      return

    console.warn(warning.message)
  }
}
