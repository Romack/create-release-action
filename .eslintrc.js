module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'no-only-tests'],
  rules: {
    'no-console': ['error'], // use the github core module instead
    complexity: [
      'error',
      {
        max: 5,
      },
    ],
    'default-case': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    eqeqeq: ['error', 'always'],
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1, 2, 3, 4, 5, 100],
        ignoreArrayIndexes: true,
      },
    ],
    'vars-on-top': 'error',
    'max-params': ['error', 3],
    'max-nested-callbacks': ['error', 3],
    'max-lines-per-function': [
      'error',
      {
        max: 35,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
      },
    ],
    'max-depth': ['error', 4],
    'no-only-tests/no-only-tests': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', '.eslintrc.js'],
      rules: {
        'max-lines-per-function': [
          'error',
          {
            max: 500,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        'no-magic-numbers': 'off',
        'max-nested-callbacks': ['error', 6],
      },
    },
  ],
};
