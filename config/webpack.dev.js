const webpack = require('webpack');
const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    polyfills: './src/polyfills.ts',
    app: './src/main.ts'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'initial'
    }
  },
  devtool: 'source-map',

  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: ['ts-loader', 'angular2-template-loader']
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve('src'),
      {}
    ),
    new webpack.DefinePlugin({
      ENV_PRODUCTION: false,
    })
  ]
};
