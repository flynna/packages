module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: '@typescript-eslint/parser',

  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  plugins: ['unused-imports'],

  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['error'] }]
        : ['warn', { allow: ['error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'off',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
