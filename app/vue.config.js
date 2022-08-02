const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        prependData: `@import "src/assets/scss/mixins.scss";
                      @import "src/assets/scss/vars.scss";`
      }
    }
  }
})
