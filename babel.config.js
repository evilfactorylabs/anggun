const BABEL_MODULE = process.env.BABEL_MODULE

function makePresets (module) {
  return [
    ['@babel/preset-env', { modules: module }],
    ['@babel/preset-react', { modules: module }]
  ]
}

const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-runtime'
]

module.exports = {
  env: {
    development: {
      presets: makePresets(BABEL_MODULE || false),
      plugins: plugins
    },
    test: {
      presets: makePresets('commonjs'),
      plugins: plugins
    },
    production: {
      presets: makePresets(false),
      plugins: plugins
    }
  }
}
