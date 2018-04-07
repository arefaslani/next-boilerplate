const path = require("path");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  webpack: (config, { dev, isServer }) => {
    const conf = config;
    // Fixes npm packages that depend on `fs` module
    conf.node = {
      fs: "empty"
    };

    conf.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    conf.plugins.push(
      new BundleAnalyzerPlugin({
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        analyzerMode: dev ? "server" : "static",
        analyzerHost: "127.0.0.1",
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: false
      })
    );

    conf.module.rules.push(
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: "emit-file-loader",
            options: {
              name: "dist/[path][name].[ext].js"
            }
          },
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              extends: path.resolve(__dirname, "./.babelrc")
            }
          },
          "styled-jsx-css-loader",
          { loader: "postcss-loader", options: { sourceMap: dev } },
          {
            loader: "sass-loader",
            options: {
              sourceMap: dev
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader",
              publicPath: "/_next/",
              outputPath: "static/images/",
              name: "[name]-[hash].[ext]"
            }
          }
        ]
      }
    );

    return conf;
  }
});
