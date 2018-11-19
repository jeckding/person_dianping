module.exports = {
  lintOnSave: true,
  // 在这里配置webpack 通过configureWebpack
  configureWebpack: {
  	resolve: {
  		alias: {
  			vue$: 'vue/dist/vue.js'
  		}
  	}
  }
}