import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
  js.configs.recommended,
  {
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
    languageOptions: {
      globals: {},
    },
  },
  eslintConfigPrettier,
];
