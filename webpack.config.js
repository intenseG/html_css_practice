const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    "main": "./src/index.js",
    "igo_words": "./src/igo_words.js"
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name]/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['main'],
      filename: 'public/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['igo_words'],
      filename: 'public/igo_words.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".js"],
  }
};