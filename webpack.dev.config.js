const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'client_render.js')
  },
  output: {
    path: path.resolve(__dirname,'temp_dev'),
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'temp_dev'),
    host: 'localhost',
    port: 3001,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react'],
            plugins: [
              ['transform-runtime', {
                polyfill: false,
                regenerator: true
              }]
            ]
          },
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: { 
              importLoaders: 2,
              modules: false,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ant$/,
        // use: {
          use: [
            'style-loader',
            'css-loader',
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ],
        // },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          quiet: false,
          failOnError: false,
          failOnWarning: false,
          emitError: false,
          emitWarning: false
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public/images/*',
      },
      {
        from: 'public/robots.txt'
      },
      {
        from: 'public/sw.js'
      },
      {
        from: 'public/manifest.json'
      },
      // {
        // from: 'public/index.html'
      // },
      {
        from: 'public/bootstrap.min.css'
      },
      {
        from: 'public/bootstrap-theme.min.css'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'public/server_render.html'
    })
  ]
}
