module.exports = {
  root: true,
  extends: ['plugin:@dvcol/presets/svelte', 'plugin:@dvcol/presets/vitest'],
  plugins: ['@dvcol/presets'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.vite.json', './tsconfig.vitest.json'],
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.*', '**/*.spec.*', '**/*.config.*', 'scripts/*.*'] }],
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
};
