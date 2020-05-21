const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  stats: "verbose",

  optimization: {
    concatenateModules: false,
    minimize: false,
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
