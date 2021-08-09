const { TreatPlugin } = require('treat/webpack-plugin')

module.exports = {
  webpack: async (config, options) => {
    config.plugins.push(new TreatPlugin())

    return config
  },
}
