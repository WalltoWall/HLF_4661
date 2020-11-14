const path = require('path')

require('dotenv').config()

const siteMetadata = {
  title: 'Omidyar Fellows',
  titleShort: 'OF',
  description:
    'Omidyar Fellows is a societal change program. We seek to cultivate the conditions in which Hawaiʻi thrives.',
  siteUrl: 'https://www.omidyarfellows.org',
}

module.exports = {
  siteMetadata,
  plugins: [
    process.env.ANALYZE && 'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-svgr',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-treat',
    process.env.GOOGLE_TAGMANAGER_ID && {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.titleShort,
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src/assets/manifest-icon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_PROJECT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        schemas: require('./src/schemas'),
        linkResolver: require('./src/linkResolver').linkResolver,
        fetchLinks: ['page.parent'],
        prismicToolbar: 'legacy',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: SAMEORIGIN',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: strict-origin',
            'Access-Control-Allow-Origin: *',
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
  ].filter(Boolean),
}
