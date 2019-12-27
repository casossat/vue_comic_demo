var path = require('path');
var GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
  runtimeCompiler: true,

  chainWebpack: config => {
    config.resolve.alias
      .set('~', path.resolve(__dirname, 'src/'));
  },

  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, 'src/')
      }
    },
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: "Lato", variants: ["300", "400", "700", "900"] },
          { family: "Roboto", variants: ["300", "400", "700", "900"] },
          { family: "Raleway", variants: ["300", "400", "700", "900"] },
          { family: "Poppins", variants: ["300", "400", "700", "900"] },
          { family: "Fira Sans", variants: ["300", "400", "700", "900"] },
          { family: "Nunito", variants: ["300", "400", "700", "900"] }
        ]
      })
    ]
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': 'rgba(9, 159, 132, 1)',
          'font-size-base': '16px',
        },
        javascriptEnabled: true
      }
    }
  }
}
