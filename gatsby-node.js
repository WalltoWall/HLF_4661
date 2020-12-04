const path = require('path')

/**
 * Number of news posts to display on each paginated news post listing page.
 */
const NEWS_POSTS_PER_PAGE = 2

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
   * Create pages for all Interior Page documents in Prismic. The document's
   * UID is passed as context here to allow the template to query for the
   * specific document.
   *
   * If a page defines a redirect in its Main tab, a redirect is created
   * instead.
   *
   * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  for (const page of getNodesByType('PrismicInteriorPage')) {
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
      component: path.resolve(__dirname, 'src/templates/interior_page.tsx'),
      context: { uid: page.uid },
    })
  }

  /**
   * Create all News-related pages, including paginated news post listings and
   * individual news post pages.
   */
  {
    const newsPosts = getNodesByType('PrismicNewsPost').sort(
      (a, b) =>
        Date.parse(b.data?.published_at ?? b.first_published_date) -
        Date.parse(a.data?.published_at ?? a.first_published_date),
    )

    /**
     * Create paginated pages listing all news posts. Pagination is done by
     * passing limit and skip values as context. This allows the template to
     * query a set of news posts for the page's pagination parameters.
     *
     * @see https://www.gatsbyjs.com/docs/adding-pagination/
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    const numPages = Math.max(
      Math.ceil(newsPosts.length / NEWS_POSTS_PER_PAGE),
      1,
    )
    for (let i = 0; i < numPages; i++)
      createPage({
        path: i === 0 ? '/news/' : `/news/${i + 1}/`,
        component: path.resolve(__dirname, 'src/templates/news.tsx'),
        context: {
          limit: NEWS_POSTS_PER_PAGE,
          skip: i * NEWS_POSTS_PER_PAGE,
          numPages,
          currentPage: i + 1,
          total: newsPosts.length,
        },
      })

    /**
     * Create paginated pages listing all news posts for each news category.
     * Pagination is done by passing limit and skip values as context. This
     * allows the template to query a set of news posts for the page's
     * pagination parameters.
     *
     * @see https://www.gatsbyjs.com/docs/adding-pagination/
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    for (const newsCategory of getNodesByType('PrismicNewsCategory')) {
      const newsCategoryPosts = newsPosts.filter((newsPost) =>
        newsPost.data?.news_categories?.find?.(
          (item) => item?.news_category?.uid === newsCategory.uid,
        ),
      )
      const numPages = Math.max(
        Math.ceil(newsCategoryPosts.length / NEWS_POSTS_PER_PAGE),
        1,
      )
      for (let i = 0; i < numPages; i++)
        createPage({
          path: i === 0 ? newsCategory.url : `${newsCategory.url}${i + 1}/`,
          component: path.resolve(__dirname, 'src/templates/news_category.tsx'),
          context: {
            uid: newsCategory.uid,
            limit: NEWS_POSTS_PER_PAGE,
            skip: i * NEWS_POSTS_PER_PAGE,
            numPages,
            currentPage: i + 1,
            total: newsCategoryPosts.length,
          },
        })
    }

    /**
     * Create pages for all News Post documents in Prismic. The document's UID
     * is passed as context here to allow the template to query for the
     * specific document.
     *
     * News post pages have links to the next and/or previous post. Here, we
     * sort all news posts by published date and also pass the next/previous
     * post UIDs as context.
     *
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    for (let i = 0; i < newsPosts.length; i++) {
      const newsPost = newsPosts[i]
      const nextNewsPost = newsPosts[i + 1]
      const prevNewsPost = newsPosts[i - 1]

      createPage({
        path: newsPost.url,
        component: path.resolve(__dirname, 'src/templates/news_post.tsx'),
        context: {
          uid: newsPost.uid,
          nextUID: nextNewsPost?.uid,
          prevUID: prevNewsPost?.uid,
        },
      })
    }
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
