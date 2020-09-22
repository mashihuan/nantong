module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // overrides: [
  //   {
  //     files: [],
  //     excludedFiles: '',
  //     rules: ''
  //   }
  // ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
