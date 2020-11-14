const util = require('util')

module.exports = {
  webpack: async (config, options) => {
    config.module.rules[0].exclude = [
      /node_modules\/(?!(@walltowall\/calico)\/)/,
    ]

    return config
  },
}
