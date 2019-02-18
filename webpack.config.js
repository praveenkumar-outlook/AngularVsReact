const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    react: path.join(__dirname, "src/index.tsx")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "scripts/[name].bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "dist/index.html"),
      template: path.join(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    historyApiFallback: true,
    hot: true,
    open: true
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "ts-loader"
      }
    }]
  }
};

module.exports = config;
