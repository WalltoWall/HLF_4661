/**
 * This module is imported in the following files:
 *
 *   - /gatsby-browser.js
 *   - /gatsby-ssr.js
 *   - /.storybook/preview.js
 *
 * All exports are re-exported in the gatsby-* files allowing access to the
 * Gatsby Browser and SSR APIs.
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 * @see https://www.gatsbyjs.org/docs/ssr-apis/
 */

import '@reach/skip-nav/styles.css'
import 'minireset.css'
import 'keen-slider/keen-slider.min.css'
import './index.css'

import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import {
	PrismicPreviewProvider,
	RepositoryConfig,
} from 'gatsby-plugin-prismic-previews'
import { TreatProvider } from 'react-treat'

import { DebugProvider } from './hooks/useDebug'
import { theme } from './theme.treat'
import { linkResolver } from './linkResolver'

const repositoryConfigs: RepositoryConfig[] = [
	{
		repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
		linkResolver,
		componentResolver: {
			page: React.lazy(() => import('./templates/page')),
			interior_page: React.lazy(() => import('./templates/interior_page')),
			news_post: React.lazy(() => import('./templates/news_post')),
			project: React.lazy(() => import('./templates/project')),
		},
	},
]

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
	element,
}) => (
	<DebugProvider>
		<PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
			<TreatProvider theme={theme}>{element}</TreatProvider>
		</PrismicPreviewProvider>
	</DebugProvider>
)
