const resolve = require("path").resolve;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  // When debugging, allow error to be found in source code
  devtool: "eval-source-map",
  // entry file to figure out dependencies from
  entry: "./src/index.jsx",
  // For webpacks HMR
  devServer: {
    contentBase: resolve(__dirname, "./dist"),
    publicPath: resolve("./dist"),
    watchContentBase: true,
    compress: true,
    port: 9000,
    overlay: true,
    hot: true,
  },
  // where webpack will dump built assets
  output: {
    // local path on disk
    path: resolve("./dist"),
    filename: "bundle.js",
    // path in browser e.g. /server/dist
    publicPath: resolve("./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },

  // TODO: move to .babelrc in static/
  module: {
    rules: [
      {
        // Babel loaded for JSX -> JS
        test: /\.jsx?/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
              ["@babel/preset-react"],
            ],
            plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
          },
        },
      },
      {
        // handle css stylesheets
        test: /\.csv$/,
        loader: "style-loader!css-loader?modules",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["index.html"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
