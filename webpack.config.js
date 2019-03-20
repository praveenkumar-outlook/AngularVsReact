const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    core: path.join(__dirname, "node_modules/core-js/client/shim.min.js"),
    zone: path.join(__dirname, "node_modules/zone.js/dist/zone.js"),
    angular: path.join(__dirname, "src/angular.ts"),
    react: path.join(__dirname, "src/react.tsx"),
    vue: path.join(__dirname, "src/vue.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "scripts/[name].bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    alias: {
      vue: 'vue/dist/vue.js'
    }
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
    },
    {
      test: /\.html$/,
      loader: "html-loader"
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/"
        }
      }]
    }]
  }
};

module.exports = config;
