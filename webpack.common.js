const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },
  resolve: {
    roots: [path.resolve(__dirname, "../src")],
    extensions: [".js", ".tsx", ".ts"],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      })
    ]
  }
};
