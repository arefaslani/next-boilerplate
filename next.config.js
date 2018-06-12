const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
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

    conf.module.rules.push({
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
    });

    return conf;
  }
};
