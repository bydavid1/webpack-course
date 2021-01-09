const path = require('path')
const MiniCSSExtraxtPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: {
    index : path.resolve(__dirname, 'src/js/index.js'),
    contact : path.resolve(__dirname, 'src/js/contact.js'),
  },
  mode: 'production',
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
          'style-loader', //2
          'css-loader', //1 ^
        ]
      },
      {
        test: /\.scss$/,
        use : [
          'style-loader', //3
          'css-loader', //2 ^
          'sass-loader', //1 ^
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
  }
}