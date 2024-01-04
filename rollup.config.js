const resolve = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

module.exports = {
  input: './modules/index.js',
  output: [
    {
      name: '_',
      file: './build/mini-underscore-umd.js',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
    serve({
      open: true,
    }),
    livereload(),
  ],
}
