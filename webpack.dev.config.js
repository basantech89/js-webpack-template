const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'palette': './src/pages/palette.js',
    'typography': './src/pages/typography.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname,'./dist'),
    index: 'index.html',
    port: 9000,
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.(ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 // 3 kilobytes
          }
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'palette.html',
      chunks: ['palette'],
      title: 'Palette Page',
      template: 'src/index.hbs',
      description: 'palette page',
    }),
    new HtmlWebpackPlugin({
      filename: 'typography.html',
      chunks: ['typography'],
      title: 'Typography Page',
      template: 'src/index.hbs',
      description: 'typography page',
    })
  ]
}