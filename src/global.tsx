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

import 'minireset.css'
import '@reach/skip-nav/styles.css'
import '@reach/tabs/styles.css'
import '@reach/dialog/styles.css'
import '@walltowall/siamese/dist/siamese.cjs.development.css'
import 'keen-slider/keen-slider.min.css'

import './index.css'

import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { PreviewStoreProvider } from 'gatsby-source-prismic'
import { TreatProvider } from 'react-treat'

import { DebugProvider } from './hooks/useDebug'
import { theme } from './theme.treat'

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
  element,
}) => (
  <DebugProvider>
    <PreviewStoreProvider>
      <TreatProvider theme={theme}>{element}</TreatProvider>
    </PreviewStoreProvider>
  </DebugProvider>
)
