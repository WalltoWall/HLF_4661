const path = require('path')

module.exports = {
  typescript: {
    check: false,
  },
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    '@storybook/addon-links/register',
    path.resolve('./.storybook/preset-gatsby.js'),
    path.resolve('./.storybook/preset-svgr.js'),
    path.resolve('./.storybook/preset-treat.js'),
  ],
}
