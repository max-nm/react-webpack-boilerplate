/* eslint-disable no-process-env */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { CheckerPlugin } from 'awesome-typescript-loader';

const devMode = process.env.NODE_ENV !== 'production';
const SRC_DIR = `${__dirname}/src`;
const DIST_DIR = `${__dirname}/dist`;

module.exports = {
  entry: [`${SRC_DIR}/index.tsx`],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: '[name].[hash].js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // This enables local scoped CSS based in CSS Modules spec
              modules: true,
              url: false,
              sourceMap: process.env.NODE_ENV !== 'production',
              // eslint-disable-next-line no-dupe-keys
              modules: {
                // generates a unique name for each class (e.g. app__app___2x3cr)
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        exclude: /node_modules/,
        // use: ['babel-loader'],
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      // favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      // eslint-disable-next-line no-dupe-keys
      filename: 'style.[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 3000,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
};
