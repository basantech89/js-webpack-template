const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: {
    'palette': './src/pages/palette.js',
    'typography': './src/pages/typography.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'./dist'),
    // publicPath: '/static/'
    publicPath: 'http://localhost:9001/'
  },
  mode: 'production',
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
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
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
    }),
    new ModuleFederationPlugin({
      name: 'UIApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Palette': './src/components/palette/index.js',
        './Typography': './src/components/typography/index.js'
      }
    })
  ]
}
