const path = require('path')

exports.createPages = (gatsbyContext) => {
  const { actions, getNodesByType, reporter } = gatsbyContext
  const { createPage, createRedirect } = actions

  /**
   * Create pages for all Page documents in Prismic. The document's UID is
   * passed as context here to allow the template to query for the specific
   * document.
   *
   * If a page defines a redirect in its Main tab, a redirect is created
   * instead.
   *
   * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  for (const page of getNodesByType('PrismicPage')) {
    if (page.data.redirect_to.url) {
      createRedirect({
        fromPath: page.url,
        toPath: page.data.redirect_to.url,
        isPermanent: page.data.redirect_is_permanent,
        redirectInBrowser: true,
        force: true,
      })
      continue
    }

    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/page.tsx'),
      context: { uid: page.uid },
    })
  }

  /**
   * Create global redirects defined in the Settings document.
   *
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  for (const redirect of getNodesByType('PrismicSettings')[0].data.redirects)
    if (redirect.from_path && redirect.to_path)
      createRedirect({
        fromPath: redirect.from_path,
        toPath: redirect.to_path,
        isPermanent: redirect.is_permanent,
        redirectInBrowser: true,
        force: true,
      })

  /**
   * Create a redirect from /admin to Prismic.
   *
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  {
    const url = `https://${process.env.GATSBY_PRISMIC_REPOSITORY_NAME}.prismic.io`
    reporter.info(`created /admin redirect to ${url}`)
    createRedirect({
      fromPath: '/admin',
      toPath: url,
      redirectInBrowser: true,
      force: true,
    })
  }

  /**
   * Create a redirect from /docs to client documentation.
   *
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  {
    const url = process.env.CLIENT_DOCS_URL
    if (url) {
      reporter.info(`created /docs redirect to ${url}`)
      createRedirect({
        fromPath: '/docs',
        toPath: url,
        redirectInBrowser: true,
        force: true,
      })
    }
  }
}
