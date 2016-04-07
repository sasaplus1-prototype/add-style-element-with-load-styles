webpack = require 'webpack'

module.exports =

  context: __dirname

  target: 'web'

  entry:
    index: "#{__dirname}/sources/index.js"

  output:
    path: __dirname
    publicPath: './'
    filename: '[name].js'

  resolve:
    extensions: [
      ''
      '.js'
    ]
    modulesDirectories: [
      'node_modules'
    ]

  plugins: [
    new webpack.NoErrorsPlugin
    new webpack.IgnorePlugin(/vertx/)
    new webpack.optimize.OccurenceOrderPlugin
    new webpack.optimize.DedupePlugin
    new webpack.optimize.AggressiveMergingPlugin
  ]
