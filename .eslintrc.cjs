module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  ignorePatterns: ['.eslintrc.cjs', 'dist', 'node_modules', 'coverage'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/return-await': 'off',
  },

  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
}
