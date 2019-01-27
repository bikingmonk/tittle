const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const context = path.join(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

module.exports = ({ mode } = { mode: "production" }) => {
  return webpackMerge(
    {
      entry: "./src/index.js",
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      output: {
        path: outDir
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: "babel-loader",
            include: context
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin([
          {
            from: path.join(context, "data"),
            to: path.join(outDir, "data")
          }
        ])
      ]
    },
    modeConfig(mode)
  );
};
