const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      hot: true,
    },
  }
})
