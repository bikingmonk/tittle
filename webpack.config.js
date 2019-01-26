const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const outDir = path.resolve(__dirname, "dist");

module.exports = ({ mode } = { mode: "production" }) => {
  return webpackMerge(
    {
      mode,
      entry: "./src/index.js",
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      output: {
        path: outDir
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig(mode)
  );
};
