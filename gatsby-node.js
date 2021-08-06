const path = require('path')
const { TreatPlugin } = require('treat/webpack-plugin')

/**
 * Pages with these UIDs will not be created via `createPage` in the
 * `createPages` Node API. These pages typically are handled manually in
 * `src/pages`.
 */
const CREATE_PAGE_UID_SKIPS = [/^404$/, /^preview$/, /^search$/]

/**
 * Number of news posts to display on each paginated news posts listing page.
 */
const NEWS_POSTS_PER_PAGE = 6

/**
 * Number of projects to display on each paginated projects listing page.
 */
const PROJECTS_PER_PAGE = 6

/**
 * Characters that represent ʻokinas. Used to remove ʻokina-like charaters to
 * aid sorting.
 */
const OKINA_REGEX = /[ʻ‘]/

exports.createPages = async (gatsbyContext) => {
  const { actions, reporter, graphql } = gatsbyContext
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
  const pagesRes = await graphql(`
    query {
      allPrismicPage {
        nodes {
          url
          uid
          data {
            redirect_to {
              url
            }
            redirect_is_permanent
          }
        }
      }
    }
  `)

  for (const page of pagesRes.data.allPrismicPage.nodes) {
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

    const shouldSkip = CREATE_PAGE_UID_SKIPS.some((pattern) =>
      pattern.test(page.uid),
    )
    if (!shouldSkip) {
      createPage({
        path: page.url,
        component: path.resolve(__dirname, 'src/templates/page.tsx'),
        context: { uid: page.uid },
      })
    }
  }

  const interiorPagesRes = await graphql(`
    query {
      allPrismicInteriorPage {
        nodes {
          url
          uid
          data {
            redirect_to {
              url
            }
            redirect_is_permanent
          }
        }
      }
    }
  `)

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
  for (const page of interiorPagesRes.data.allPrismicInteriorPage.nodes) {
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
    const newsPostsRes = await graphql(`
      query {
        allPrismicNewsPost {
          nodes {
            uid
            url
            first_publication_date
            data {
              published_at
              news_categories {
                news_category {
                  uid
                }
              }
            }
          }
        }
      }
    `)

    const newsPosts = newsPostsRes.data.allPrismicNewsPost.nodes.sort(
      (a, b) =>
        Date.parse(b.data?.published_at ?? b.first_publication_date) -
        Date.parse(a.data?.published_at ?? a.first_publication_date),
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
    const newsCategoriesRes = await graphql(`
      query {
        allPrismicNewsCategory {
          nodes {
            uid
            url
          }
        }
      }
    `)

    for (const newsCategory of newsCategoriesRes.data.allPrismicNewsCategory
      .nodes) {
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
   * Create all Project-related pages, including paginated project post
   * listings and individual project pages.
   */
  {
    const projectsRes = await graphql(`
      query {
        allPrismicProject {
          nodes {
            uid
            url
            data {
              title {
                text
              }
              project_categories {
                project_category {
                  uid
                }
              }
            }
          }
        }
      }
    `)

    const projects = projectsRes.data.allPrismicProject.nodes.sort((a, b) =>
      Intl.Collator('en').compare(
        a.data?.title?.text?.replace?.('ʻ', ''),
        b.data?.title?.text?.replace?.('ʻ', ''),
      ),
    )

    /**
     * Create paginated pages listing all projects. Pagination is done by
     * passing limit and skip values as context. This allows the template to
     * query a set of project posts for the page's pagination parameters.
     *
     * @see https://www.gatsbyjs.com/docs/adding-pagination/
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    const numPages = Math.max(Math.ceil(projects.length / PROJECTS_PER_PAGE), 1)
    for (let i = 0; i < numPages; i++)
      createPage({
        path: i === 0 ? '/impact/projects/' : `/impact/projects/${i + 1}/`,
        component: path.resolve(__dirname, 'src/templates/projects.tsx'),
        context: {
          limit: PROJECTS_PER_PAGE,
          skip: i * PROJECTS_PER_PAGE,
          numPages,
          currentPage: i + 1,
          total: projects.length,
        },
      })

    /**
     * Create paginated pages listing all projects for each project category.
     * Pagination is done by passing limit and skip values as context. This
     * allows the template to query a set of project posts for the page's
     * pagination parameters.
     *
     * @see https://www.gatsbyjs.com/docs/adding-pagination/
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    const projectCategoriesRes = await graphql(`
      query {
        allPrismicProjectCategory {
          nodes {
            uid
            url
          }
        }
      }
    `)

    for (const projectCategory of projectCategoriesRes.data
      .allPrismicProjectCategory.nodes) {
      const projectCategoryPosts = projects.filter((project) =>
        project.data?.project_categories?.find?.(
          (item) => item?.project_category?.uid === projectCategory.uid,
        ),
      )
      const numPages = Math.max(
        Math.ceil(projectCategoryPosts.length / PROJECTS_PER_PAGE),
        1,
      )
      for (let i = 0; i < numPages; i++)
        createPage({
          path:
            i === 0 ? projectCategory.url : `${projectCategory.url}${i + 1}/`,
          component: path.resolve(
            __dirname,
            'src/templates/project_category.tsx',
          ),
          context: {
            uid: projectCategory.uid,
            limit: PROJECTS_PER_PAGE,
            skip: i * PROJECTS_PER_PAGE,
            numPages,
            currentPage: i + 1,
            total: projectCategoryPosts.length,
          },
        })
    }

    /**
     * Create pages for all Project Post documents in Prismic. The document's UID
     * is passed as context here to allow the template to query for the
     * specific document.
     *
     * Project post pages have links to the next and/or previous post. Here, we
     * sort all project posts by published date and also pass the next/previous
     * post UIDs as context.
     *
     * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
     */
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      const nextProject = projects[i + 1]
      const prevProject = projects[i - 1]

      createPage({
        path: project.url,
        component: path.resolve(__dirname, 'src/templates/project.tsx'),
        context: {
          uid: project.uid,
          nextUID: nextProject?.uid,
          prevUID: prevProject?.uid,
        },
      })
    }
  }

  const settingsRes = await graphql(`
    query {
      prismicSettings {
        data {
          redirects {
            from_path
            to_path
            is_permanent
          }
        }
      }
    }
  `)

  /**
   * Create global redirects defined in the Settings document.
   *
   * @see https://www.gatsbyjs.org/docs/actions/#createRedirect
   */
  for (const redirect of settingsRes.data.prismicSettings.data.redirects)
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

exports.createSchemaCustomization = (gatsbyContext) => {
  const { actions, schema } = gatsbyContext
  const { createTypes } = actions

  const PrismicProject = schema.buildObjectType({
    name: 'PrismicProject',
    fields: {
      // "_ON_BUILD_ONLY_" prefix is used to emphasize that this field is only
      // available when building the site via Node.js. Previewing draft content
      // from Prismic using `gatsby-source-prismic` on the built site will not
      // include these fields.
      _ON_BUILD_ONLY_normalized_title: {
        type: 'String',
        description: 'Title field with accents and ʻokinas removed.',
        resolve: async (source) =>
          (source.data.title.text ?? '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(OKINA_REGEX, ''),
      },
    },
  })

  createTypes(PrismicProject)
}

exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-treat'),
  })
}

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  if (stage === 'develop-html') return

  const defaultPluginOptions = stage.includes('develop')
    ? {
        localIdentName: '[name]-[local]_[hash:base64:5]',
        themeIdentName: '_[name]-[local]_[hash:base64:4]',
      }
    : {
        localIdentName: '[hash:base64:5]',
        themeIdentName: '[hash:base64:4]',
      }

  actions.setWebpackConfig({
    plugins: [
      new TreatPlugin({
        ...defaultPluginOptions,
        outputCSS: !stage.includes('html'),
        outputLoaders: [loaders.miniCssExtract()],
      }),
    ],
  })
}
