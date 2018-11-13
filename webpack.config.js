const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    landing: path.resolve(__dirname, 'server_render.js')
  },
  output: {
    path: path.resolve(__dirname,'dist/CSR'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
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
          }
        }
      },
      {
        test: /\.(css|scss)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { 
              loader: 'css-loader', options: { 
                importLoaders: 2,
                minimize: true,
                sourceMap: true,
                modules: false,
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.ant$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'public/images/*'
      },
      {
        from: 'public/sw.js'
      },
      {
        from: 'public/manifest.json'
      },
      {
        from: 'public/robots.txt'
      },
      {
        from: 'public/bootstrap.min.css'
      },
      {
        from: 'public/bootstrap-theme.min.css'
      }
    ]),
    new CleanWebpackPlugin(['dist/CSR'], {root: __dirname})
  ]
}
