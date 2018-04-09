const path = require("path");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();
const withSourceMaps = require("@zeit/next-source-maps");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const plugins = [
  withSourceMaps,
  withOptimizedImages,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../server-analyze.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "client-analyze.html"
        }
      }
    }
  ]
];

module.exports = withPlugins([...plugins], {
  webpack: (config, { dev, isServer }) => {
    const conf = config;
    // Fixes npm packages that depend on `fs` module
    conf.node = {
      fs: "empty"
    };

    conf.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    conf.module.rules.push({
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
    });

    return conf;
  }
});
