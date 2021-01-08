const path = require('path')
const MiniCSSExtraxtPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index : path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use : [
          {
            loader: MiniCSSExtraxtPlugin.loader
          },
          //'style-loader', //2
          'css-loader', //1 ^
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtraxtPlugin({
      filename: 'css/[name].css'
    })
  ]
}