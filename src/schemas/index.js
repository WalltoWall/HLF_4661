/**
 * Export schema files for each custom type defined in Prismic here.
 * This file is imported by `/gatsby-config.js` and as such must be written
 * in CommonJS.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic#Providing-JSON-schemas
 */

module.exports = {
  page: require('./page.json'),
  form: require('./form.json'),
  navigation: require('./navigation.json'),
  settings: require('./settings.json'),
}
