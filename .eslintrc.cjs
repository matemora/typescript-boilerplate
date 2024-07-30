/* eslint-env node */
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
      '@typescript-eslint/no-shadow': 'error',
      'no-shadow': 'off',
    },
  };
  