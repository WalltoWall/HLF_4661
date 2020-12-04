// This file must be in CommonJS format since it is imported in gatsby-node.js

const { linkResolverPathFor } = require('@walltowall/helpers')

exports.linkResolver = () => (doc) => {
  switch (doc.type) {
    case 'news_post':
    case 'news_category':
      return `/news/${doc.uid}/`

    case 'project':
    case 'project_category':
      return `/impact/projects/${doc.uid}/`

    case 'page':
    case 'interior_page':
    default:
      return linkResolverPathFor(doc)
  }
}
