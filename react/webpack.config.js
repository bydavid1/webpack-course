const path = require('path')
const MiniCSSExtraxtPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: {
    index : path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 8081
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use : [
          // {
          //   loader: MiniCSSExtraxtPlugin.loader
          // },
          'style-loader', //2
          'css-loader', //1 ^
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader' 
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jpg|png|gif|svg|woff|eot|ttf|mp4$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 900000
          }
        },
      }
    ]
  },
  plugins : [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
    // new MiniCSSExtraxtPlugin({
    //   filename: 'css/[name].css'
    // })
  ]
}