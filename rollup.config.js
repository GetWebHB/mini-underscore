const resolve = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  input: './lib/index.js',
  output: [
    {
      name: 'iceUtils',
      file: './build/mini-underscore-umd.js',
      format: 'umd',
      globals: {
        underscore: '_',
      },
    },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
  external: ['underscore'],
}
