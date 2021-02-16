module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ['error', { code: 200 }],
    indent: ['error', 4],
},
settings: {
    'import/resolver': {
        node: {
            paths: ['src'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
    },
};
