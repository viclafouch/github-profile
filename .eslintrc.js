module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/recommended', 'prettier/vue', 'standard', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 130,
        semi: false,
        singleQuote: true
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          ['components', 'directives', 'filters'],
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'created',
          'mounted',
          'methods'
        ]
      }
    ]
  }
}
