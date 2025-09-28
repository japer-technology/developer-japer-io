import js from '@eslint/js';
import markdown from 'eslint-plugin-markdown';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      '.git/',
      '*.min.js',
      'asset/',
    ],
  },
];