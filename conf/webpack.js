const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = [
  // js
  {
    mode: 'development',
    entry: {
      common: './src/ts/common.ts'
    },
    output: {
      path: __dirname + '/../dist/js',
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
    }
  },
  // css
  {
    entry: {
      common: './src/scss/common/import.scss'
    },
    output: {
      path: __dirname + '/../dist/css',
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: false
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('cssnano'),
                    require('autoprefixer')({
                      grid: true,
                      'browsers': ['> 1%', 'last 2 versions'],
                      sourceMap: false
                    })
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './[name].css'
      }),
      new StyleLint({
        configFile: './conf/stylelintrc.js',
        context: 'src/css',
        files: '**/*.scss',
        failOnError: false,
        quiet: false
      })
    ]
  }
]
