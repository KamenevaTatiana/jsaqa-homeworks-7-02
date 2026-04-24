import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      globals: {},
    },

    extends: ['eslint:recommended', 'prettier'],
    rules: {
      'no-var': 'error',
      semi: 'error',
      indent: 'error',
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      'no-use-before-define': 'error',
    },
  },
]);
