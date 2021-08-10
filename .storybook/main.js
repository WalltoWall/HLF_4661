const { TreatPlugin } = require('treat/webpack-plugin')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-gatsby',
  ],
  core: { builder: 'webpack5' },
  typescript: { check: false },

  webpackFinal: (config) => {
    config.plugins.push(new TreatPlugin())
    config.module.rules.push({
      test: /\.(ts|tsx|js)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
        plugins: [
          require.resolve('@babel/plugin-proposal-class-properties'),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve('babel-plugin-remove-graphql-queries'),
        ],
      },
    })

    return config
  },
}
