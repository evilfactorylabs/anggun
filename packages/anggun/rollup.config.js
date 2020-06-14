// // rollup.config.js
// import resolve from '@rollup/plugin-node-resolve'
// import babel from '@rollup/plugin-babel'
// import commonjs from '@rollup/plugin-commonjs'

// // const isProduction = process.env.NODE_ENV === 'production'

// const formats = ['cjs', 'es']

// export default async () => ({
//   input: './src/index.ts',
//   output: formats.map(format => ({
//     file: `./dist/index.${format}.js`,
//     sourcemap: true,
//     name: 'anggun',
//     globals: {
//       react: 'React',
//       'react-dom': 'ReactDOM'
//     }
//   })),
//   external: ['react', 'react-dom', '@emotion/core', '@emotion/styled', 'emotion-theming'],
//   plugins: [
//     babel({
//       /** only transpile our source code */
//       exclude: 'node_modules/**',
//       babelHelpers: 'bundled'
//     }),
//     resolve(),
//     commonjs()
//     /**
//      * use an async IIFE and dynamic imports to avoid unnecessary module loading
//      * which can be surprisingly slow
//      * https://rollupjs.org/guide/en/#core-functionality
//      */
//     // isProduction && (await import('rollup-plugin-terser')).terser()
//   ]
// })

import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: ['src/index.ts'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      clean: true,
      typescript: require('typescript')
    })
  ]
}
