module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: '/proyecciones',

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
