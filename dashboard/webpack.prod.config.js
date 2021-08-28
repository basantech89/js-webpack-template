const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.js',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: 'http://localhost:9000/'
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
      filename: 'index.html',
      title: 'Dashboard App',
      description: 'dashboard application',
    }),
    new ModuleFederationPlugin({
      name: 'DashboardApp',
      remotes: {
        UIApp: 'UIApp@http://localhost:9001/remoteEntry.js',
        UserApp: 'UserApp@http://localhost:9002/remoteEntry.js'
      }
    })
  ]
}
