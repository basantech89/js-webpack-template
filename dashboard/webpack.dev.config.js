const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: 'http://localhost:9000/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname,'./dist'),
    index: 'index.html',
    port: 9000,
    overlay: true,
    historyApiFallback: {
      index: 'index.html'
    }
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
