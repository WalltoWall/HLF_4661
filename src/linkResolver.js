// This file must be in CommonJS format since it is imported in gatsby-node.js

const { linkResolverPathFor } = require('@walltowall/helpers')

const cohortUIDMap = {
	'cohort-i': 1,
	'cohort-ii': 2,
	'cohort-iii': 3,
	'cohort-iv': 4,
	'cohort-v': 5,
	'cohort-vi': 6,
	'cohort-vii': 7,
	'cohort-viii': 8,
	'cohort-ix': 9,
	'cohort-x': 10,
	'cohort-xi': 11,
	'cohort-xii': 12,
	'cohort-xiii': 13,
	'cohort-xiv': 14,
	'cohort-xv': 15,
}

exports.linkResolver = (doc) => {
	switch (doc.type) {
		case 'news_post':
		case 'news_category':
			return `/news/${doc.uid}/`

		case 'project':
		case 'project_category':
			return `/impact/projects/${doc.uid}/`

		case 'cohort':
			const number = cohortUIDMap[doc.uid]
			return number ? `/fellows/?cohort=${number}` : `/fellows/`

		case 'page':
		case 'interior_page':
		default:
			return linkResolverPathFor(doc)
	}
}
