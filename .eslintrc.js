module.exports = {
  $schema: 'http://json.schemastore.org/eslintrc',
  extends: 'eslint:recommended',
  files: ['*.js', '*.jsx'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
