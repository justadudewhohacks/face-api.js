import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import path from 'path';

const { minify } = process.env

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ES2015',
          declaration: false
        }
      }
    }),
    node(),
    commonjs()
  ].concat(minify ? uglify() : []),
  output: {
    extend: true,
    file: `dist/face-api${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'faceapi',
    globals: {
      'crypto': 'crypto'
    }
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