module.exports = {
  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

    const assetLoader = assetRule
      ? {
          loader: assetRule.loader,
          options: assetRule.options || assetRule.query,
        }
      : undefined

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader].filter(Boolean),
    })

    return config
  },
}
