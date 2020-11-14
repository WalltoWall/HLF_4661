# File Structure

The following directories form the basic organization for code in this project.

In addition to this, many source files contain comment descriptions about their
use at the top of the file.

- `gatsby-config.js`

  List of Gatsby plugins each with its own set of configuration. See the
  official [Gatsby Config][gatsby-config-docs] documentation for more details.

* `gatsby-node.js` (optional)

  Programatically generates all pages for the project. See the official Gatsby
  [Creating a modifying pages][gatsby-node-docs] documentation for more details.

  **Note**: Not all projects will contain this file. The above mentioned themes
  already contain the most common functionality needed without creating a
  project-specific `gatsby-node.js` file.

* `gatsby-browser.js`

  JavaScript injected into the browser for each page. This is typically used for
  polyfills and/or hooking into Gatsby-specific events. See the official [Gatsby
  Browser APIs][gatsby-browser-docs] documentation for more details.

* `.env`

  List of environment variables needed to run the project. Variables here are
  reserved for sensitive data like API keys and passwords.

  Normally, `.env` files are not committed directly to projects, but due to the
  read-only nature of Prismic API keys and our private repositories, we've
  elected to commit them for these projects.

* `.storybook/`

  Isolated development environment for the project. See the official Storybook
  [docs][storybook-docs] for more information.

  Storybook also functions as client-facing documentation on updating and
  maintaining the site.

* `src/`

  Source code for the site.

  - `src/assets/`

    Static images, fonts, audio/video files, etc. used for the site. This folder
    is provided to [`gatsby-source-filesystem`][gatsby-source-filesystem] to
    allow [`gatsby-image`][gatsby-image] integration.

  - `src/components/`

    Reusable React components used in the main layout and in slices.

  - `src/pages/`

    Pages not generated from the CMS such as site-wide search or page-specific
    CMS content overrides. See [Overriding Pages and
    Slices][guide-overriding-pages-and-slices] for more details.

  - `src/hooks/` (optional)

    Reusable React hooks used in components and slices.

  - `src/schemas/`

    Prismic Custom Type JSON definition files copied from Prismic. These files
    should mirror the configuration in the Prismic CMS to track changes. This
    must be updated manually.

  - `src/slices/`

    React components used for Slices. See the [Slices](concept-slices.md)
    concept documentation for more details.

  - `src/templates/`

    Reusable React components used as templates for pages.

* `static/`

  Static files added to the built version of the site.

[gatsby-browser-docs]: https://www.gatsbyjs.org/docs/browser-apis/
[gatsby-config-docs]: https://www.gatsbyjs.org/docs/gatsby-config/
[gatsby-image]: https://www.gatsbyjs.org/packages/gatsby-image/
[gatsby-node-docs]:
  https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs
[gatsby-source-filesystem]:
  https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
[guide-overriding-pages-and-slices]: ./guide-overriding-pages-and-slices
[storybook-docs]: https://storybook.js.org/docs/basics/introduction/
