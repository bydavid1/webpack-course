const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtraxtPlugin = require('mini-css-extract-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: {
    index : path.resolve(__dirname, 'src/js/index.js'),
    contact : path.resolve(__dirname, 'src/js/contact.js'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use : [
          {
            loader: MiniCSSExtraxtPlugin.loader //Se reemplaza style-loaders por el plugin
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use : [
          {
            loader: MiniCSSExtraxtPlugin.loader
          }, //3
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
    new MiniCSSExtraxtPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
    new Webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
}