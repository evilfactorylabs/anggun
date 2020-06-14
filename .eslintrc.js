module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['examples/cra/**/*'],
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off'
      }
    }
  ]
}
