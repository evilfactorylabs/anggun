// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: [
    'react',
    'react-dom',
    '@emotion/core',
    '@emotion/styled',
    'emotion-theming',
    '@styled-system'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve(),
    commonjs()
  ]
}
