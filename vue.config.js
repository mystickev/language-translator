const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.child_process = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
  },
}

module.exports = {
  chainWebpack: (config) => {
    config.plugin("polyfills").use(NodePolyfillPlugin);
  },
};
