const path = require('path')
const fs = require('fs')
const truncate = require('truncate')
const { valuesDeep } = require('@walltowall/helpers')

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
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-svgr',
    'gatsby-plugin-sitemap',
    process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
        exclude: ['/preview/**', '/admin/**', '/docs/**'],
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
        google: {
          families: ['PT Serif', 'PT Serif:ital'],
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
        fetchLinks: ['page.parent', 'interior_page.parent'],
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'allContent',
        engine: 'lunr',
        query: fs.readFileSync(
          path.resolve(__dirname, 'src/localSearchQuery.graphql'),
          'utf-8',
        ),
        ref: 'url',
        store: [
          'type',
          'url',
          'title',
          'description',
          'featuredImageURL',
          'featuredImageAspectRatio',
          'featuredImageDimensions',
          'featuredImageAlt',
        ],
        index: ['title', 'description', 'content'],
        normalizer: ({ data }) => [
          ...data.allPrismicInteriorPage.nodes.map((node) => {
            const content = valuesDeep([
              ...node.data?.header,
              ...node.data?.body,
            ]).join(' ')

            return {
              type: 'interior_page',
              url: node.url,
              title: node.data?.meta_title ?? node.data?.title?.text,
              description:
                node.data?.meta_description ?? truncate(content, 200),
              content,
            }
          }),
          ...data.allPrismicProject.nodes.map((node) => ({
            type: 'project',
            url: node.url,
            title: node.data?.title?.text,
            featuredImageURL: node.data?.featured_image?.url,
            featuredImageAspectRatio: node.data?.featured_image?.dimensions
              ? node.data?.featured_image?.dimensions?.width /
                node.data?.featured_image?.dimensions?.height
              : 8 / 5,
            featuredImageDimensions: node.data?.featured_image?.dimensions,
            featuredImageAlt: node.data?.featured_image?.alt,
            description: truncate(node.data?.description?.text, 200),
            content: valuesDeep(node.data?.body).join(' '),
          })),
          ...data.allPrismicNewsPost.nodes.map((node) => ({
            type: 'news_post',
            url: node.url,
            title: node.data?.title?.text,
            featuredImageURL: node.data?.featured_image?.url,
            featuredImageAspectRatio: node.data?.featured_image?.dimensions
              ? node.data?.featured_image?.dimensions?.width /
                node.data?.featured_image?.dimensions?.height
              : 8 / 5,
            featuredImageDimensions: node.data?.featured_image?.dimensions,
            featuredImageAlt: node.data?.featured_image?.alt,
            description: truncate(node.data?.excerpt?.text, 200),
            content: valuesDeep(node.data?.body).join(' '),
          })),
          ...data.allPrismicPage.nodes.map((node) => {
            const content = valuesDeep(node.data?.body).join(' ')

            return {
              type: 'page',
              url: node.url,
              title: node.data?.meta_title ?? node.data?.title?.text,
              description:
                node.data?.meta_description ?? truncate(content, 200),
              content,
            }
          }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            title: `${siteMetadata.title} News`,
            output: '/news.xml',
            query: fs.readFileSync(
              path.resolve(__dirname, 'src/newsFeedQuery.graphql'),
              'utf-8',
            ),
            serialize: ({ query }) =>
              query.allPrismicNewsPost.nodes.map((node) => ({
                title: node.data?.title?.text,
                description: node.data?.excerpt?.text,
                date: node.data?.published_at
                  ? Date.parse(node.data?.published_at)
                  : Date.parse(node.first_publication_date),
                url: siteMetadata.siteUrl + node.url,
                guid: node.id,
                categories: node.data?.news_categories?.map?.(
                  (item) => item?.news_category?.document?.data?.name?.text,
                ),
              })),
          },
        ],
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
