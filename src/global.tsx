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

// import '@walltowall/siamese/dist/siamese.css'
import '@reach/skip-nav/styles.css'
import 'minireset.css'
import 'keen-slider/keen-slider.min.css'
import 'gatsby-plugin-prismic-previews/dist/styles.css'
import './index.css'

import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { TreatProvider } from 'react-treat'

import { DebugProvider } from './hooks/useDebug'
import { theme } from './theme.treat'

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
  element,
}) => (
  <DebugProvider>
    <PrismicPreviewProvider>
      <TreatProvider theme={theme}>{element}</TreatProvider>
    </PrismicPreviewProvider>
  </DebugProvider>
)
