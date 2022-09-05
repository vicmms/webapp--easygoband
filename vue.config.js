module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/webapp--easygoband/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
