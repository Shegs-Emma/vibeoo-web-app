/* eslint-disable linebreak-style */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['vibeoo-uploads.s3.amazonaws.com'],
  },
  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin(),
      );
    }

    return config;
  },
};
