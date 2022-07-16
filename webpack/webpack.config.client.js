const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const buildDest = path.resolve(__dirname, '../app/public')
const njDest = path.resolve(__dirname, '../app/view')

module.exports = {
  // name: 'client',

  context: path.resolve(__dirname, '../webpack'),

  // entry: {
  //   client: path.resolve(__dirname, 'client/index.tsx'),
  // },

  entry: './client/index.tsx',

  mode: 'production',

  output: {
    // path: path.resolve(__dirname + '/app/public'),
    path: buildDest,
    filename: 'bundle.[contenthash].js',
    publicPath: '/public/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // configFile: './tsconfig.client.json',
          configFile: path.resolve(__dirname, '../webpack/tsconfig.client.json')
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), 
    new WebpackManifestPlugin()
  ],
}
