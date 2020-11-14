module.exports = {
  webpack: async (config, options) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'fp-ts/es6': 'fp-ts/lib',
      },
    }

    return config
  },
}
