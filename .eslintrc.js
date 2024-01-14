module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'object-shorthand': ['warn', 'always', { avoidQuotes: true }],
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    semi: 'off',
  },
}
