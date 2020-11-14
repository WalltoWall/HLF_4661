// This file must be in CommonJS format since it is imported in gatsby-node.js

const { linkResolverPathFor } = require('@walltowall/helpers')

exports.linkResolver = () => linkResolverPathFor
