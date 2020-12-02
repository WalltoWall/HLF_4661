/**
 * Export schema files for each custom type defined in Prismic here.
 * This file is imported by `/gatsby-config.js` and as such must be written
 * in CommonJS.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic#Providing-JSON-schemas
 */

module.exports = {
  cohort: require('./cohort.json'),
  cohort_schedule: require('./cohort_schedule.json'),
  fellow: require('./fellow.json'),
  interior_page: require('./interior_page.json'),
  navigation: require('./navigation.json'),
  news_category: require('./news_category.json'),
  page: require('./page.json'),
  settings: require('./settings.json'),
}
