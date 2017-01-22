import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { DIST, NODE_MODULES, SRC } from './paths';
import rules from './rules';


export default {
  context: SRC,

  entry: [
    './index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: [
      `${NODE_MODULES}`,
      `${SRC}/components`,
      `${SRC}/containers`,
    ],

    extensions: ['.js', '.json', '.jsx'],

    alias: {

    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.ejs`,
    }),
  ],

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  profile: true,
};