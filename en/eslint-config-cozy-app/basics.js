'use strict'

module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'no-param-reassign': 'warn',
    'spaced-comment': ['error', 'always']
  }
}
