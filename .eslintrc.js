module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  parserOptions: {},
  extends: [
    'plugin:prettier/recommended',
    // "prettier/flowtype",
    // "prettier/react",
    'prettier/standard'
  ],
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  // add your custom rules here
  ignorePatterns: ['lib/', 'tsc/'],
  rules: {
    'prettier/prettier': 'error',
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-eval': [
      'error',
      {
        allowIndirect: true
      }
    ],
    'vue/no-v-html': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ]
  }
}
