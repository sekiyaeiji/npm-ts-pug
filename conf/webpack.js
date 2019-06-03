const TSLintPlugin = require('tslint-webpack-plugin')
const package = require('../package.json')
const version = package.version

module.exports = {
  mode: 'development',
  entry: {
    common: './src/ts/common.ts'
  },
  output: {
    path: __dirname + '/../dist/stat/' + version + '/js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
      new TSLintPlugin({
          files: ['./src/ts/**/*.ts']
      })
  ]
}
